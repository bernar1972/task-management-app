import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  getApiUrl(): string {
    // Si estamos en el servidor (SSR), usar URL de producción por defecto
    if (!isPlatformBrowser(this.platformId)) {
      return 'https://task-management-app-0in0.onrender.com/api/tasks';
    }
    
    // En el navegador, verificar si es desarrollo
    if (this.isLocalhost()) {
      return 'http://localhost:5226/api/tasks';
    }
    
    // En producción - Render URL real
    return 'https://task-management-app-0in0.onrender.com/api/tasks';
  }

  private isLocalhost(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    
    return window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1' ||
           window.location.hostname === '';
  }
}