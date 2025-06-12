makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    Microbit_Car.Car_Sport(Microbit_Car.enCAR_STATE.BACK, 500)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    Microbit_Car.Car_Sport(Microbit_Car.enCAR_STATE.LEFT_SPIN, 500)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    Microbit_Car.Car_Sport(Microbit_Car.enCAR_STATE.RIGHT_SPIN, 500)
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function () {
    Microbit_Car.Car_Sport(Microbit_Car.enCAR_STATE.RUN, 0)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    Microbit_Car.Car_Sport(Microbit_Car.enCAR_STATE.RUN, 500)
})
basic.forever(function () {
    makerbit.connectIrReceiver(DigitalPin.P8)
})
