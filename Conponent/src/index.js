import { startFW } from "./framework";
import { appModule } from "./comp1/app.module";
import { logics as compLogics } from "./comp1/app.comp.logics";

const appComponent1 = new AppComponent({
  container: document.getElementById("root")
});

appComponent1.logics();

const appComponent2 = getAppComponent({
    container: document.getElementById("root")
});

appComponent1.start();
