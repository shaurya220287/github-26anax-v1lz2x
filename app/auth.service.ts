export class AuthService {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  onFirstDataRendered(params: any): any {
    params.api.forEachNode((node) => {
      node.setExpanded(false);
    });
  }
}
