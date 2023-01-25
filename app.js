// #region game screen buttons and hex variables
let allHex = []
let homeBtns = []
let roadBtns = []
// #endregion

// #region color variables
let redPick = ""
let bluePick = ""
let whitePick = ""
let yellowPick = ""
let greenPick = ""
let brownPick = ""
// #endregion

// #region player Variables
let player_amount = 0
let playerColorInterval = 0
let playerNum = 1
let players = []
let curPlayer

// #endregion

// #region HTML element variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const btnContainer = document.getElementById("btnContainer")
const playerContainer = document.getElementById("playerContainer")
const occupiedHomes = document.querySelector("#occupiedHomeBtn")
const endTurnBtn = document.querySelector("#endTurnBtn")

// #endregion

// #region global variables
let thisTurn = 0
let beginTurn = 0
const a = 2 * Math.PI / 6
const r = 75
let minusNum = 1
let lastIndexCount = 0
let beginingTurnCount = 0
let beginingPieceCount = 1
let beginingTOF = true

// #endregion

// #region Classes
class Hexagon {
  constructor(posX, posY) {
    this.posX = posX
    this.posY = posY
  }

  draw(ctx) {
    ctx.beginPath()
    for (var i = 0; i < 6; i++) {
      ctx.lineTo(this.posX + r * Math.cos(a * i), this.posY + r * Math.sin(a * i))
    }
    ctx.closePath()
    ctx.stroke()
  }
}

class player {
  constructor(color, turn, houses, cities, roads) {
    this.color = color
    this.turn = turn
    this.houses = houses
    this.cities = cities
    this.roads = roads
  }
}

class board_button {
  constructor(posX, posY, buttonId, cls, occupied, color) {
    this.posX = posX
    this.posY = posY
    this.buttonId = buttonId
    this.cls = cls
    this.occupied = occupied
    this.color = color
  }

  createButton() {
    let newBtn
    let id = 1
    let x = 320
    let y = 279
    let cls = ''

    //#region Home Buttons 119
    for (let i = 0; i < 3; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      homeBtns.push(newBtn)
    }
    x = 280
    y = 212
    for (let i = 0; i < 4; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = 199
    y = 212
    for (let i = 0; i < 4; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = 160
    y = 144
    for (let i = 0; i < 5; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = 79
    y = 144
    for (let i = 0; i < 5; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = 40
    y = 76
    for (let i = 0; i < 6; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -40
    y = 76
    for (let i = 0; i < 6; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -79
    y = 144
    for (let i = 0; i < 5; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -159
    y = 144
    for (let i = 0; i < 5; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -199
    y = 212
    for (let i = 0; i < 4; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -279
    y = 212
    for (let i = 0; i < 4; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    x = -319
    y = 280
    for (let i = 0; i < 3; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 137
      homeBtns.push(newBtn)
    }
    //#endregion

    //#region Road Buttons
    //#region horizontal roads LR=120 UD = 69
    x = 224
    y = 212
    for (let i = 0; i < 4; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      roadBtns.push(newBtn)
    }
    x = 104
    y = 143
    for (let i = 0; i < 5; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      roadBtns.push(newBtn)
    }
    x = -16
    y = 74
    for (let i = 0; i < 6; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      roadBtns.push(newBtn)
    }
    x = -136
    y = 143
    for (let i = 0; i < 5; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      roadBtns.push(newBtn)
    }
    x = -256
    y = 212
    for (let i = 0; i < 4; i++) {
      newBtn = new board_button(x + "px", y + "px")
      y += 138
      roadBtns.push(newBtn)
    }
    //#endregion

    x = 285
    y = 250
    for (let i = 0; i < 6; i++) {
      if (i % 2) {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      } else {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }
    x = 165
    y = 181
    for (let i = 0; i < 8; i++) {
      if (i % 2) {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      } else {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }
    x = 45
    y = 112
    for (let i = 0; i < 10; i++) {
      if (i % 2) {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      } else {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }
    x = -75
    y = 112
    for (let i = 0; i < 10; i++) {
      if (i % 2) {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      } else {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }
    x = -195
    y = 181
    for (let i = 0; i < 8; i++) {
      if (i % 2) {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      } else {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }
    x = -315
    y = 250
    for (let i = 0; i < 6; i++) {
      if (i % 2) {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotatedown")
        roadBtns.push(newBtn)
      } else {
        newBtn = new board_button(x + "px", y + "px", id, cls = "rotateup")
        roadBtns.push(newBtn)
      }
      y += 68.5
    }


    //#endregion

  }
  drawButton() {
    let template = ""
    let id = 0
    homeBtns.forEach(btn => {
      btn.buttonId = id
      id++
      if (btn.occupied != true) {
        template += `
        <button id="homeBtn" class="board_button" style="background-color: ${btn.color} ;display: none; margin-left: ${btn.posX}; margin-top: ${btn.posY}; z-index: 1;" onclick="placeHouse(${btn.buttonId})" disabled="true"></button>
        `
      } else {
        let btnPosX
        btnPosX = Number(btn.posX.replace(/[^0-9-]/g, '')) - 10 + "px"
        template += `
        <button id="occupiedHomeBtn" class="board_button" name="${btn.color}Home" style="color: ${btn.color} ; margin-left: ${btnPosX}; margin-top: ${btn.posY}; z-index: 1;" onclick="placeHouse(${btn.buttonId})""><i class="fa-solid fa-house fa-lg pieces"></i></button>
        `
      }

    })
    id = 0
    roadBtns.forEach(btn => {
      btn.buttonId = id
      id++
      if (btn.occupied != true) {
        template += `
        <button id="roadBtn" class="${btn.cls} board_button" style="background-color: ${btn.color}; display: none; margin-left: ${btn.posX}; margin-top: ${btn.posY}; z-index: 1;" onclick="placeRoad(${btn.buttonId})" disabled="true"></button>
        `
      } else {
        template += `
        <button id="occupiedRoadBtn" class="${btn.cls} board_button" name="${btn.color}Road" style="background-color: ${btn.color}; margin-left: ${btn.posX}; margin-top: ${btn.posY}; z-index: 1;" onclick="placeRoad(${btn.buttonId})"></button>
        `
      }

    })
    btnContainer.innerHTML = template
  }

}

// #endregion

// #region Creating Hexagons
function createHex(hex) {
  hex.draw(ctx)
}

function drawHex() {
  let new_hex
  let x = 0
  let y = 100
  // #region Hex Math
  for (let i = 0; i < 3; i++) {
    x = 500
    y += 92
    new_hex = new Hexagon(x * 1.5, y * 1.5)
    allHex.push(new_hex)
  }
  y = 54
  for (let i = 0; i < 4; i++) {
    x = 420
    y += 92
    new_hex = new Hexagon(x * 1.5, y * 1.5)
    allHex.push(new_hex)
  }
  y = 8
  for (let i = 0; i < 5; i++) {
    x = 340
    y += 92
    new_hex = new Hexagon(x * 1.5, y * 1.5)
    allHex.push(new_hex)
  }
  y = 54
  for (let i = 0; i < 4; i++) {
    x = 260
    y += 92
    new_hex = new Hexagon(x * 1.5, y * 1.5)
    allHex.push(new_hex)
  }
  y = 100
  for (let i = 0; i < 3; i++) {
    x = 180
    y += 92
    new_hex = new Hexagon(x * 1.5, y * 1.5)
    allHex.push(new_hex)
  }
  // #endregion
  allHex.forEach(hex => {
    createHex(hex)
  })
}

// #endregion

// #region enabling & disabling buttons

function enableBtn(btn) {
  const home_buton = document.querySelectorAll(btn)
  home_buton.forEach(btn => {
    btn.removeAttribute("disabled")
    btn.style.display = ""
  })
  if (btn == "#homeBtn") {
    disableBtn('#roadBtn')
  } else {
    disableBtn('#homeBtn')
  }
}

function disableBtn(btn) {
  const home_buton = document.querySelectorAll(btn)
  home_buton.forEach(btn => {
    if (btn.occupied != true) {
      btn.setAttribute("disabled", true)
      btn.style.display = "none"
    }
  })
}

//#endregion

// #region Player picking color


function drawColorPick(playerCount) {
  player_amount += playerCount

  let playerAmount = document.getElementById("playerAmount")
  let colorPick = document.getElementById("colorPick")

  playerAmount.style.display = "none"
  playerAmount.setAttribute("disabled", true)
  colorPick.style.display = ""
  playerColor()
}

function playerColor(prevColor) {
  let gameBoard = document.getElementById("gameBoard")
  let colorPick = document.getElementById("colorPick")
  let mainScreen = document.getElementById("mainScreen")
  if (player_amount == 0) {
    colorPick.style.display = "none"
    mainScreen.style.display = "none"
    gameBoard.style.display = ""
    nextTurn()
  }

  switch (prevColor) {
    case "#ff0000":
      redPick = "none"
      break
    case "#0000ff":
      bluePick = "none"
      break
    case "#ffffff":
      whitePick = "none"
      break
    case "#ffff00":
      yellowPick = "none"
      break
    case "#008000":
      greenPick = "none"
      break
    case "#5f3d11":
      brownPick = "none"
      break
    default:
      break
  }

  player_amount--
  let colorPickTemplate = `
  <p style="font-size: 50px; margin-left: 50px;">PICK YOUR COLOR</p>
    <div style="display: inline;">
      <div style="margin-left: 40;">
        <p style="font-size: 36; text-align: center; font-weight: bold">Player<br>${playerNum}</p>
      </div>
      <div style="margin-left: 25%;">
        <span class="m35"><button class="colorPickBtn" style="background-color: #ff0000; display:${redPick};" onclick="playerColor('#ff0000')"></button>
        <span class="m35"><button class="colorPickBtn" style="background-color: #0000ff; display:${bluePick};" onclick="playerColor('#0000ff')"></button>
        <span class="m35"><button class="colorPickBtn" style="background-color: #ffffff; display:${whitePick};" onclick="playerColor('#ffffff')"></button>
        <span class="m35"><button class="colorPickBtn" style="background-color: #ffff00; display:${yellowPick};" onclick="playerColor('#ffff00')"></button>
        <span class="m35"><button class="colorPickBtn" style="background-color: #008000; display:${greenPick};" onclick="playerColor('#008000')"></button>
        <span class="m35"><button class="colorPickBtn" style="background-color: #5f3d11; display:${brownPick};" onclick="playerColor('#5f3d11')"></button>
      </div>
    </div>`

  colorPick.innerHTML = colorPickTemplate
  playerNum++

  if (playerColorInterval != 0) {
    new_user = new player(prevColor, playerNum - 2)
    players.push(new_user)
  }

  playerColorInterval++
}

// #endregion

// #region next turn and drawing the pieces
function drawPieces(user) {

  let btnTemplate = ""

  btnTemplate = `
      <button id="homePiece" style="left: 100; color: ${user.color}; top: 100; z-index: 1; border:none;" onclick="enableBtn('#homeBtn')">
        <i class="fa-solid fa-house fa-5x pieces"></i>
      </button>
      <button id="cityPiece" style="left: 100;color: ${user.color};  top: 200; z-index: 1; border:none;" onclick="enableBtn('#homeBtn')">
        <i class="fa-solid fa-city fa-5x pieces"></i>
      </button>
      <button id="roadPiece" style="left: 100; color: ${user.color}; top: 300; z-index: 1; border:none;" onclick="enableBtn('#roadBtn')">
        <i class="fa-solid fa-road fa-5x pieces"></i>
      </button>
      <p class="showPlayer">Player ${user.turn}</p>
  `
  playerContainer.innerHTML = btnTemplate
}
// #endregion

// #region beginging game and turns

function gameSetup() {
  console.log("aaa")
  if (beginingTurnCount > players.length - 1 && beginingPieceCount < 2) {
    beginingPieceCount++
  }
  beginingTurnCount++
  let user = players[beginTurn]
  curPlayer = user


  if (beginTurn > players.length - 1) {
    user = players[beginTurn - minusNum]
    curPlayer = user
    if (lastIndexCount = 0) {
      lastIndexCount++
      minusNum--
    }
    if (minusNum < 3) {
      minusNum++
    }
    drawPieces(user)
    checkBeginingPlacement(user)
    checkBeginingPieces(user)
    defaultBeginingPieces()
  } else {
    drawPieces(user)
    checkBeginingPlacement(user)
    checkBeginingPieces(user)
    defaultBeginingPieces()
    beginTurn++
  }

}

function nextTurn() {

  if (players[players.length - 1].houses == undefined) {
    players.forEach(ply => {
      if (ply.houses == undefined) {
        ply.houses = 0
        ply.roads = 0
        ply.cities = 0
      }
    })
    gameSetup()
  } else if (players[0].houses < 2 || players[0].roads < 2 ) {
    gameSetup()
  } else {
    if (thisTurn > players.length - 1) {
      thisTurn = 0
    }
    let user = players[thisTurn]
    curPlayer = user
    drawPieces(user)

    thisTurn++
  }
}

// #endregion

// #region place roads & houses & decting areas

function placeHouse(btnId) {
  btn = homeBtns[btnId]
  if (detectRoads(btn)) {
    detectHomes(btn)
    btn.disabled = true
    btn.occupied = true
    btn.color = curPlayer.color
    curPlayer.houses += 1
    boardBase.drawButton()
    if (beginingTurnCount < (players.length * 2) + 1 && beginingTOF == true) {
      checkBeginingPlacement(curPlayer)
      checkBeginingPieces(curPlayer)
    }
  }
}

function placeRoad(btnId) {
  btn = roadBtns[btnId]
  btn.occupied = true
  btn.color = curPlayer.color
  btn.disabled = true
  curPlayer.roads += 1
  boardBase.drawButton()
  if (beginingTurnCount < (players.length * 2) + 1 && beginingTOF == true) {
    checkBeginingPlacement(curPlayer)
    checkBeginingPieces(curPlayer)
  }else{detectPlayerRoads(btn)}
}

function detectHomes(home) {
  let totalX
  let totalY
  let orgX = Number(home.posX.replace(/[^0-9-.]/g, ''))
  let orgY = Number(home.posY.replace(/[^0-9-.]/g, ''))

  homeBtns.forEach(house => {
    let checkX = Number(house.posX.replace(/[^0-9-.]/g, ''))
    let checkY = Number(house.posY.replace(/[^0-9-.]/g, ''))
    if (orgX > 0 && checkX > 0) {
      if (orgX >= checkX) {
        totalX = orgX - checkX
      } else {
        totalX = checkX - orgX
      }
    } else if (orgX < 0 && checkX < 0) {
      totalX = orgX - checkX
    } else {
      totalX = orgX - checkX
    }
    if (orgY > 0 && checkY > 0) {
      if (orgY >= checkY) {
        totalY = orgY - checkY
      } else {
        totalY = checkY - orgY
      }
    } else if (orgY < 0 && checkY < 0) {
      totalY = orgY - checkY
    } else {
      totalY = orgY - checkY
    }

    if (totalY < 3 && totalY > -3 && totalX < 83 && totalX > -83) {
      house.disabled = true
      house.occupied = true
    } else if (totalX < 42 && totalX > -42 && totalY < 72 && totalY > -72) {
      house.disabled = true
      house.occupied = true
    }
  })

}

function detectRoads(home) {
  let totalX
  let totalY
  let orgX = Number(home.posX.replace(/[^0-9-.]/g, ''))
  let orgY = Number(home.posY.replace(/[^0-9-.]/g, ''))
  let TOF = false

  roadBtns.forEach(road => {

    let checkX = Number(road.posX.replace(/[^0-9-.]/g, ''))
    let checkY = Number(road.posY.replace(/[^0-9-.]/g, ''))

    if (road.occupied == true) {

      if (orgX > 0 && checkX > 0) {
        if (orgX >= checkX) {
          totalX = orgX - checkX
        } else {
          totalX = checkX - orgX
        }
      } else if (orgX < 0 && checkX < 0) {
        totalX = orgX - checkX
      } else {
        totalX = orgX - checkX
      }
      if (orgY > 0 && checkY > 0) {
        if (orgY >= checkY) {
          totalY = orgY - checkY
        } else {
          totalY = checkY - orgY
        }
      } else if (orgY < 0 && checkY < 0) {
        totalY = orgY - checkY
      } else {
        totalY = orgY - checkY
      }

      if (totalY < 6 && totalY > -6 && totalX < 60 && totalX > -63) {
        TOF = true
      } else if (totalX < 6 && totalX > -6 && totalY < 40 && totalY > -43) {
        TOF = true
      } else if (totalX < 40 && totalX > -40 && totalY < 40 && totalY > -40) {
        TOF = true
      }
    }
  })
  return TOF

}

function detectPlayerRoads(new_road) {
  let totalX
  let totalY
  let orgX = Number(new_road.posX.replace(/[^0-9-.]/g, ''))
  let orgY = Number(new_road.posY.replace(/[^0-9-.]/g, ''))
  let TOF = false

  roadBtns.forEach(road => {

    let checkX = Number(road.posX.replace(/[^0-9-.]/g, ''))
    let checkY = Number(road.posY.replace(/[^0-9-.]/g, ''))

    if (road.occupied == true) {

      if (orgX > 0 && checkX > 0) {
        if (orgX >= checkX) {
          totalX = orgX - checkX
        } else {
          totalX = checkX - orgX
        }
      } else if (orgX < 0 && checkX < 0) {
        totalX = orgX - checkX
      } else {
        totalX = orgX - checkX
      }
      if (orgY > 0 && checkY > 0) {
        if (orgY >= checkY) {
          totalY = orgY - checkY
        } else {
          totalY = checkY - orgY
        }
      } else if (orgY < 0 && checkY < 0) {
        totalY = orgY - checkY
      } else {
        totalY = orgY - checkY
      }

      if (totalY < 40 && totalY > -40 && totalX < 68 && totalX > -68) {
        TOF = true
      }
    }
  })
  return TOF

}

function checkBeginingPlacement(user) {
  if(players[0].houses == 2){
    beginingTOF = false
  }

  if (user.houses != beginingPieceCount || user.roads != beginingPieceCount) {
    endTurnBtn.disabled = true
  } else {
    endTurnBtn.disabled = false
  }
}

function checkBeginingPieces (user){
  console.log(user)
  console.log(curPlayer)
  const homePieceBtn = document.querySelector("#homePiece")
  const roadPieceBtn = document.querySelector("#roadPiece")

  if(user.houses == beginingPieceCount && user.roads == beginingPieceCount){
    roadPieceBtn.disabled = true
    homePieceBtn.disabled = true
    roadPieceBtn.style.pointerEvents = "none"
    homePieceBtn.style.pointerEvents = "none"
  }else if(user.houses != user.roads){
    roadPieceBtn.disabled = true
    homePieceBtn.disabled = false
    roadPieceBtn.style.pointerEvents = "none"
    homePieceBtn.style.pointerEvents = "auto"
  }else if(user.houses == user.roads){
    roadPieceBtn.disabled = false
    homePieceBtn.disabled = true
    roadPieceBtn.style.pointerEvents = "auto"
    homePieceBtn.style.pointerEvents = "none"
  }
}

function defaultBeginingPieces(){
  const cityPiece = document.querySelector("#cityPiece")

  cityPiece.disabled = true
  cityPiece.style.pointerEvents = "none"
}

// #endregion

// FUNCTION CALLS
drawHex()
let boardBase = new board_button
boardBase.createButton()
boardBase.drawButton()


