export const GEN_MENUS = 'GEN_MENUS';
export const GEN_ROUTES = 'GEN_ROUTES';

export const generateMenus = (value) => ({ type: GEN_MENUS, payload: value })

export const generateRoutes = () => ({ type: GEN_ROUTES })