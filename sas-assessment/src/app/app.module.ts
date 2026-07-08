import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsComponent } from './components/signals/signals.component';
import { ToSignalComponent } from './components/rxjs-interop/to-signal/to-signal/to-signal.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling/error-handling.component';
import { ToObservableComponent } from './components/rxjs-interop/to-observable/to-observable.component';
import { RxjsInteropComponent } from './components/rxjs-interop/rxjs-interop/rxjs-interop.component';
import { CatchErrorComponent } from './components/error-handling/catch-error/catch-error.component';
import { ThrowErrorComponent } from './components/error-handling/throw-error/throw-error.component';
import { RetryComponent } from './components/error-handling/retry/retry.component';
import { RetryWhenComponent } from './components/error-handling/retry-when/retry-when.component';
import { FinalizeComponent } from './components/error-handling/finalize/finalize.component';
import { BasicComponent } from './components/error-handling/basic/basic.component';
import { CombinedComponent } from './components/error-handling/combined/combined.component';
import { TakeUntilDestroyedComponent } from './components/rxjs-interop/take-until-destroyed/take-until-destroyed.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsComponent,
    ToSignalComponent,
    ErrorHandlingComponent,
    ToObservableComponent,
    RxjsInteropComponent,
    CatchErrorComponent,
    ThrowErrorComponent,
    RetryComponent,
    RetryWhenComponent,
    FinalizeComponent,
    BasicComponent,
    CombinedComponent,
    TakeUntilDestroyedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
