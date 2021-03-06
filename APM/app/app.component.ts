import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';

@Component({
	selector: 'pm-app',
	template:`<div>	
				<nav class="navbar navbar-default">
					<div class="container-fluid">
						<a [routerLink] = "['Welcome']" class="navbar-brand">{{pageTitle}}</a>
						<ul class="nav navbar-nav">
							<li>
								<a [routerLink] = "['Products']">Product List</a>
							</li>
						</ul>
					</div>
				</nav>
				<router-outlet></router-outlet>
			</div>`,
	directives: [ ROUTER_DIRECTIVES],
	providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]

})
@RouteConfig([
	{ path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
	{ path: '/products', name: 'Products', component: ProductListComponent },
	{ path: '/product/:id' , name: 'ProductDetail', component: ProductDetailComponent }
])
export class AppComponent {
	pageTitle: string = 'Product Management'
}
