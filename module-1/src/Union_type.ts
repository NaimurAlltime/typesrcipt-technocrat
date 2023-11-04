// Union type:

type FrontendDeveloper = "ReactDeveloper" | "AngularDeveloper";
const newFrontendDeveloper: FrontendDeveloper = "ReactDeveloper";

type BackendDeveloper = "NodeJsDeveloper" | "Laravel Developer";
const newBackendDeveloper: BackendDeveloper = "NodeJsDeveloper";

type Developer = FrontendDeveloper | BackendDeveloper;

type userInfo = {
  name: string;
  gender: "male" | "female";
  married_status: "married" | "unmarried";
};

// intersection
type Frontend = {
  skills: string[];
  designation1: "frontend";
};

type Backend = {
  skills: string[];
  designation2: "backend";
};

type FullStack = Frontend & Backend;

const newFullStack: FullStack = {
  skills: ["html", "css", "express", "mongodb"],
  designation1: "frontend",
  designation2: "backend",
};
