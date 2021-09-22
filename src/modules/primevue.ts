import {UserModule} from '@/types'

import PrimeVue from 'primevue/config';

import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';
import BadgeDirective from 'primevue/badgedirective';
import StyleClass from "primevue/styleclass";

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

export const install: UserModule = ({app, router, isClient}) => {
    app.directive('tooltip', Tooltip);
    app.directive('ripple', Ripple);
    app.directive('badge', BadgeDirective);
    app.directive('styleclass', StyleClass);


    app.use(PrimeVue, {ripple: true});
    app.use(ConfirmationService);
    app.use(ToastService);

}
