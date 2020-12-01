import { makeAutoObservable } from "mobx";
import * as ApiWeather from '../components/ApiWeather';

class Store {
  current = null;
  forecast = null;
  errorText = false;
  preloader = false;

  constructor() {
    makeAutoObservable(this)
  }

  // changePreloader() {
  //   this.preloader = !this.preloader;
  // }

  // clearError() {
  //   this.errorText = '';
  // }

  searchCurrentWeather(value, form) {
    this.preloader = true;
    ApiWeather.getCurrentWeather(value)
      .then((data) => {
        if (data.success === false) {
          throw new Error('Введите корректные данные');
        } else {
          // this.preloader = true;
          this.errorText = false;
          this.current = data;
          ApiWeather.getForecastWeather(data)
            .then((data) => {
              this.forecast = data;
            })
            .then(() => this.preloader = false)
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.log(err);
        this.errorText = true;
        this.preloader = false;
      })
      .finally(() => {
        form.reset();
      })
  }

}

export default new Store();
