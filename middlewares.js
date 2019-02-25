import routes from "./routes";

export const localsMiddelware = (req, res, next) => {
    res.locals.siteName = "YanaTube";
    res.locals.routes = routes;
    next();
};