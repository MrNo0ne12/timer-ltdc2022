function stop_time() {
    clearInterval(timer_interval1);
    clearInterval(timer_interval2);
    clearInterval(timer_interval3);
    clearInterval(timer_interval4);
    timer1.classList.remove("shadow");
    timer2.classList.remove("shadow");
    timer3.classList.remove("shadow");
    timer4.classList.remove("shadow");
  }