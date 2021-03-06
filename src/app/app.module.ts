import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

//Components:
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { ListOfProductsComponent } from './profile/list-of-products/list-of-products.component';
import { ProductComponent } from './product/product.component';

// Bootstrap, NGX  modules: 
import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxCarouselModule } from 'ngx-carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxClickToEditModule } from 'ngx-click-to-edit';
import { TooltipModule } from 'ngx-bootstrap';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Services: 
import { AuthService } from './services/auth.service';
import { AccountService } from './services/account.service';
import { ProductService } from './services/product.service';
import { CarouselComponent } from './carousel/carousel.component';

//Security
import { JwtModule } from '@auth0/angular-jwt';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductsOfUserComponent } from './products-of-user/products-of-user.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { AdminExtensionsPerUserComponent } from './admin-extensions-per-user/admin-extensions-per-user.component';
import { UploadProductComponent } from './upload-product/upload-product.component';
import { UploadProductFormComponent } from './upload-product-form/upload-product-form.component';
import { MarketShowSectionComponent } from './market-show-section/market-show-section.component';
import { TagSectionComponent } from './tag-section/tag-section.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminFeaturedComponent } from './admin-featured/admin-featured.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    NavbarComponent,
    ProfileComponent,
    AdminComponent,
    ListOfProductsComponent,
    ProductComponent,
    CarouselComponent,
    ProductDetailsComponent,
    ProductSearchComponent,
    ProductsOfUserComponent,
    ProfileDataComponent,
    AdminExtensionsPerUserComponent,
    UploadProductComponent,
    UploadProductFormComponent,
    MarketShowSectionComponent,
    TagSectionComponent,
    FileUploadComponent,
    ImageUploadComponent,
    AdminDashboardComponent,
    AdminProductsComponent,
    AdminFeaturedComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule, 
    RoutingModule, 
    NgxCarouselModule, 
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule, 
    CollapseModule.forRoot(), 
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    NgxClickToEditModule.forRoot(), 
    TooltipModule.forRoot(), 
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),  
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['localhost:3001/auth/'] //example
      }
    }), 
  ],
  providers: [
    AuthService,
    AccountService, 
    ProductService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
