import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const noAuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  return !localStorage.getItem('token') || router.createUrlTree(['/inventario']);
};
