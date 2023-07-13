import {Project} from "./Project.model";

export interface Feature {
  name: string;
  description: string;
  priority: string;
  project: Project;
  owner: string;
  status: 'todo' | 'doing' | 'done';
}
