import { MazeWorkspace } from "./courses/maze";
import { mazeTutorialSteps } from "./courses/maze/tutorial";

// テンプレートがどのように動作するのか確認したい場合はコメントアウトを外してください。
// import { TemplateWorkspace } from "./workspaces/template";
// import { templateTutorialSteps } from "./workspaces/template/tutorial";

export const routes = [
  {
    path: "/maze",
    label: "迷路",
    description: "プログラムを書いて迷路を解こう！",
    Component: MazeWorkspace,
    tutorialSteps: mazeTutorialSteps,
  },
  // {
  //   path: "/template",
  //   label: "テンプレート",
  //   description: "新しい課題を作るためのテンプレートです",
  //   Component: TemplateWorkspace,
  //   tutorialSteps: templateTutorialSteps,
  // },
];
