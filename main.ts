controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Cursor.y += -6
    if (Cursor.top < Keyboard.top) {
        Cursor.bottom = Keyboard.bottom - 1
    }
    Keyboard.say(FindLocation())
})
function FindLocation () {
    if (Lowercase) {
        return LowercaseCharacters[(Math.trunc(Cursor.top) - (Math.trunc(Keyboard.top) + 1)) / 6][(Math.trunc(Cursor.left) - (Math.trunc(Keyboard.left) + 1)) / 6]
    } else {
        return UppercaseCharacters[(Math.trunc(Cursor.top) - (Math.trunc(Keyboard.top) + 1)) / 6][(Math.trunc(Cursor.left) - (Math.trunc(Keyboard.left) + 1)) / 6]
    }
}
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    Cursor.y += -6
    if (Cursor.top < Keyboard.top) {
        Cursor.bottom = Keyboard.bottom - 1
    }
    Keyboard.say(FindLocation())
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (FindLocation() == "backspace") {
        Text = Text.substr(0, Text.length - 1)
        TextDisplay.setText(Text)
    } else if (FindLocation() == "delete") {
    	
    } else if (FindLocation() == "tab") {
        Text = "" + Text + "     "
        TextDisplay.setText(Text)
    } else if (FindLocation() == "font color") {
        Text = "" + Text + "     "
        TextDisplay.setText(Text)
    } else if (FindLocation() == "page color") {
    	
    } else if (FindLocation() == "caps lock") {
        if (Lowercase) {
            Keyboard.setImage(assets.image`KeyboardUppercase`)
            Lowercase = false
        } else {
            Keyboard.setImage(assets.image`KeyboardLowercase`)
            Lowercase = true
        }
    } else if (FindLocation() == "up arrow") {
    	
    } else if (FindLocation() == "enter") {
    	
    } else if (FindLocation() == "close keyboard") {
    	
    } else if (FindLocation() == "shift") {
        if (Lowercase) {
            Keyboard.setImage(assets.image`KeyboardUppercase`)
            Lowercase = false
        } else {
            Keyboard.setImage(assets.image`KeyboardLowercase`)
            Lowercase = true
        }
        Shift = true
        Keyboard.say(FindLocation())
    } else if (FindLocation() == "left arrow") {
    	
    } else if (FindLocation() == "down arrow") {
    	
    } else if (FindLocation() == "right arrow") {
    	
    } else if (FindLocation() == "space") {
        Text = "" + Text + " "
        TextDisplay.setText(Text)
    } else {
        Text = "" + Text + FindLocation()
        TextDisplay.setText(Text)
    }
    if (Shift && !(FindLocation() == "shift")) {
        Keyboard.setImage(assets.image`KeyboardLowercase`)
        Lowercase = true
        Shift = false
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    Cursor.x += 6
    if (Cursor.right > Keyboard.right) {
        Cursor.left = Keyboard.left + 1
    }
    Keyboard.say(FindLocation())
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Cursor.x += -6
    if (Cursor.left < Keyboard.left) {
        Cursor.right = Keyboard.right - 1
    }
    Keyboard.say(FindLocation())
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Cursor.x += 6
    if (Cursor.right > Keyboard.right) {
        Cursor.left = Keyboard.left + 1
    }
    Keyboard.say(FindLocation())
})
function MakeArrays () {
    LowercaseCharacters = [[
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "backspace",
    "delete"
    ], [
    "tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "font color"
    ], [
    "caps lock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "up arrow",
    "enter",
    "hide keyboard"
    ], [
    "shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "left arrow",
    "down arrow",
    "right arrow",
    "space"
    ]]
    UppercaseCharacters = [[
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "backspace",
    "delete"
    ], [
    "tab",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "{",
    "}",
    "|",
    "page color"
    ], [
    "caps lock",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    ":",
    "\"",
    "up arrow",
    "enter",
    "hide keyboard"
    ], [
    "shift",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "<",
    ">",
    "?",
    "left arrow",
    "down arrow",
    "right arrow",
    "space"
    ]]
}
function Locations (x: number, y: number) {
    return Math.trunc(Keyboard.left) + 1 + x == Math.trunc(Cursor.left) && Math.trunc(Keyboard.top) + 1 + y == Math.trunc(Cursor.top)
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    Cursor.y += 6
    if (Cursor.bottom > Keyboard.bottom) {
        Cursor.top = Keyboard.top + 1
    }
    Keyboard.say(FindLocation())
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Cursor.y += 6
    if (Cursor.bottom > Keyboard.bottom) {
        Cursor.top = Keyboard.top + 1
    }
    Keyboard.say(FindLocation())
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    Cursor.x += -6
    if (Cursor.left < Keyboard.left) {
        Cursor.right = Keyboard.right - 1
    }
    Keyboard.say(FindLocation())
})
let Shift = false
let UppercaseCharacters: string[][] = []
let LowercaseCharacters: string[][] = []
let TextDisplay: TextSprite = null
let Text = ""
let Cursor: Sprite = null
let Lowercase = false
let Keyboard: Sprite = null
MakeArrays()
Keyboard = sprites.create(assets.image`KeyboardLowercase`, SpriteKind.Player)
Keyboard.bottom = 119
scene.setBackgroundColor(1)
Lowercase = true
Keyboard.say("")
Cursor = sprites.create(assets.image`Cursor`, SpriteKind.Player)
Cursor.setPosition(74, 109)
Keyboard.say(FindLocation())
controller.configureRepeatEventDefaults(210, 110)
Text = ""
TextDisplay = textsprite.create(Text, 0, 14)
TextDisplay.top = 2
TextDisplay.left = 2
