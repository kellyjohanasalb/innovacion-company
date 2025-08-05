import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes'; // 👈 Importa las rutas

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Rutas
    provideHttpClient()    // Habilitar HttpClient globalmente
  ]
};
