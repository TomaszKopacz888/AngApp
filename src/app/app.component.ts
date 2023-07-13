import { Component } from '@angular/core';

interface User {
  login: string;
  firstName: string;
  lastName: string;
  permissions: string;
}

interface Task {
  name: string;
  description: string;
  priority: string;
  feature: Feature;
  estimatedCompletionTime: number;
  status: 'todo' | 'doing' | 'done';
  dateAdded: Date;
  startDate?: Date;
  endDate?: Date;
  responsibleUser: 'devops' | 'developer';
  user?: User;
}

interface Feature {
  name: string;
  description: string;
  priority: string;
  project: Project;
  owner: string;
  status: 'todo' | 'doing' | 'done';
}

interface Project {
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User = {
    login: 'tkopacz',
    firstName: 'Tomasz',
    lastName: 'Kopacz',
    permissions: 'admin'
  };

  projects: Project[] = [
    {
      name: 'Project 1',
      description: 'Project 1 description'
    },
    {
      name: 'Project 2',
      description: 'Project 2 description'
    }
  ];

  features: Feature[] = [
    {
      name: 'Feature 1',
      description: 'Feature 1 description',
      priority: 'High',
      project: this.projects[0],
      owner: 'John Doe',
      status: 'todo'
    },
    {
      name: 'Feature 2',
      description: 'Feature 2 description',
      priority: 'Medium',
      project: this.projects[0],
      owner: 'Jane Smith',
      status: 'todo'
    },
    {
      name: 'Feature 3',
      description: 'Feature 3 description',
      priority: 'Low',
      project: this.projects[1],
      owner: 'Mike Johnson',
      status: 'todo'
    }
  ];

  tasks: Task[] = [
    {
      name: 'Task 1',
      description: 'Task 1 description',
      priority: 'High',
      feature: this.features[0],
      estimatedCompletionTime: 5,
      status: 'todo',
      dateAdded: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      responsibleUser: 'developer'
    },
    {
      name: 'Task 2',
      description: 'Task 2 description',
      priority: 'Medium',
      feature: this.features[0],
      estimatedCompletionTime: 3,
      status: 'todo',
      dateAdded: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      responsibleUser: 'developer'
    },
    {
      name: 'Task 3',
      description: 'Task 3 description',
      priority: 'Medium',
      feature: this.features[1],
      estimatedCompletionTime: 2,
      status: 'todo',
      dateAdded: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      responsibleUser: 'developer'
    },
    {
      name: 'Task 4',
      description: 'Task 4 description',
      priority: 'Low',
      feature: this.features[1],
      estimatedCompletionTime: 1,
      status: 'todo',
      dateAdded: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      responsibleUser: 'developer'
    },
    {
      name: 'Task 5',
      description: 'Task 5 description',
      priority: 'Low',
      feature: this.features[2],
      estimatedCompletionTime: 4,
      status: 'todo',
      dateAdded: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      responsibleUser: 'developer'
    },
    {
      name: 'Task 6',
      description: 'Task 6 description',
      priority: 'Medium',
      feature: this.features[2],
      estimatedCompletionTime: 2,
      status: 'todo',
      dateAdded: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      responsibleUser: 'developer'
    }
  ];

  selectedProject: Project | null = this.projects[0];
  selectedFeature: Feature | null = null;
  selectedTask: Task | null = null;

  selectProject(project: Project) {
    this.selectedProject = project;
    this.selectedFeature = null;
    this.selectedTask = null;
  }

  showFeatureDetails(feature: Feature) {
    this.selectedFeature = feature;
    this.selectedTask = null;
  }

  showTaskDetails(task: Task) {
    this.selectedTask = task;
  }

  getFeaturesForSelected(): Feature[] {
    if (this.selectedProject) {
      return this.features.filter(feature => feature.project === this.selectedProject);
    }
    return [];
  }

  getTasksForSelected(): Task[] {
    if (this.selectedFeature) {
      return this.tasks.filter(task => task.feature === this.selectedFeature);
    }
    return [];
  }

  getFeatureStatus(feature: Feature): string {
    const tasks = this.getTasksForSelected();
    const taskCount = tasks.length;
    const doneCount = tasks.filter(task => task.status === 'done').length;

    if (taskCount === 0) {
      return 'todo';
    } else if (doneCount === taskCount) {
      return 'done';
    } else {
      return 'doing';
    }
  }
  updateTaskStatus(task: Task) {
    if (task.status === 'done') {
      task.endDate = new Date();
    } else if (task.status === 'doing') {
      task.startDate = new Date();
    } else {
      task.startDate = new Date();
      task.endDate = new Date();
    }
  }


  updateFeatureStatus() {
    // Logika aktualizacji stanu funkcjonalności (Feature)
  }

  addNewProject() {
    // Obsługa dodawania nowego projektu
  }

  addNewFeature() {
    // Obsługa dodawania nowej funkcjonalności
  }
}
