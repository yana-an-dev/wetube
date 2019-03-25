import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddelware = (req, res, next) => {
  res.locals.siteName = "YanaTube";
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  next();
};

export const onlyPublic = (res, req, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
