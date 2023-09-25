export interface User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  multipleAddress: string;
  role: 'Admin' | 'Customer' | 'Agent';
  department?: string; // Only required for Agent
}
