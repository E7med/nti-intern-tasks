let allPosts = [];
let filteredPosts = [];

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('error').style.display = 'none';
    document.getElementById('posts-container').style.display = 'none';
}

function showError() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').style.display = 'block';
    document.getElementById('posts-container').style.display = 'none';
}

function showPosts() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('posts-container').style.display = 'block';
}

function createPostCard(post) {
    return `
        <div class="post-card" onclick="showPostDetails(${post.id})">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <div class="post-meta">
                <span class="post-id">Post #${post.id}</span>
                <span class="user-id">User #${post.userId}</span>
            </div>
        </div>
    `;
}

function renderPosts(posts) {
    const postsGrid = document.getElementById('posts-grid');
    postsGrid.innerHTML = posts.map(post => createPostCard(post)).join('');
}

function loadPosts() {
    showLoading();
    
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(posts => {
            allPosts = posts;
            filteredPosts = posts;
            renderPosts(posts);
            showPosts();
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            showError();
        });
}

function searchPosts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredPosts = allPosts;
    } else {
        filteredPosts = allPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.body.toLowerCase().includes(searchTerm)
        );
    }
    
    renderPosts(filteredPosts);
}

function showPostDetails(postId) {
    const post = allPosts.find(p => p.id === postId);
    if (!post) return;
    
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <div class="modal-meta">
            <span class="post-id">Post #${post.id}</span>
            <span class="user-id">User #${post.userId}</span>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
    
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchPosts();
        }
    });
    
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('modal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

window.loadPosts = loadPosts;
window.searchPosts = searchPosts;
window.showPostDetails = showPostDetails;
window.closeModal = closeModal; 