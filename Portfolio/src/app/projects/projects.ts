import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  standalone:false
})
export class Projects{
  projects = [
    {
      title: 'NTI Intern Tasks',
      description: 'A collection of projects and tasks completed during the NTI internship program. Showcases various web development skills and technologies learned throughout the internship experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript'],
      github: 'https://github.com/E7med/nti-intern-tasks'
    }
  ];
}