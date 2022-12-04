import { Component } from '@angular/core';
import { PageOneComponent } from './page-one.component';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
})
export class ExampleComponent {
    component = PageOneComponent;
}