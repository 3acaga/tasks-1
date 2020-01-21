import { FWZModule } from '../framework/index';
import { appComponent } from './app.component';
import { appComponent2 } from './app.component2';



export const appModule = new FWZModule({
    components: [
        appComponent,
        appComponent2
    ]
});
