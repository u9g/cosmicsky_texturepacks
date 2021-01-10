const fs = require('fs')

const ARMOR_TYPE = 'leather'
const ARMOR_PIECES = ['helmet', 'chestplate', 'leggings', 'boots']
const image = '../great.png'
const overlay = '../clear.png'
const plus = '4'
const minus = '4'

let data = []

//-5 +5
for (let i = 0; i < 12; i++) {
  // lore line 1
  for (let j = 0; j < 12; j++) {
    //lore line 2
    if (i === j) continue
    for (let k = 0; k < ARMOR_PIECES.length; k++) {
      //armor piece
      const currentItem = [
        'type=item',
        `items=minecraft:${ARMOR_TYPE}_${ARMOR_PIECES[k]}`,
        `texture.${ARMOR_TYPE}_${ARMOR_PIECES[k]}=${image}`,
        `texture.${ARMOR_TYPE}_${ARMOR_PIECES[k]}_overlay=${overlay}`,
        `nbt.display.Lore.${i}=ipattern:*-${minus}%*`,
        `nbt.display.Lore.${j}=ipattern:*+${plus}%*`,
      ].join('\n')
      data.push(currentItem)
    }
  }
}

//+5 -5
for (let i = 0; i < 12; i++) {
  // lore line 1
  for (let j = i; j < 12; j++) {
    //lore line 2
    if (i === j) continue
    for (let k = 0; k < ARMOR_PIECES.length; k++) {
      //armor piece
      const currentItem = [
        'type=item',
        `items=minecraft:${ARMOR_TYPE}_${ARMOR_PIECES[k]}`,
        `texture.${ARMOR_TYPE}_${ARMOR_PIECES[k]}=${image}`,
        `texture.${ARMOR_TYPE}_${ARMOR_PIECES[k]}_overlay=${overlay}`,
        `nbt.display.Lore.${i}=ipattern:*+${plus}%*`,
        `nbt.display.Lore.${j}=ipattern:*-${minus}%*`,
      ].join('\n')
      data.push(currentItem)
    }
  }
}

//+5 +150% -5
for (let i = 0; i < 12; i++) {
  // lore line 1
  for (let j = i; j < 12; j++) {
    //lore line 2
    for (let k = 0; k < ARMOR_PIECES.length; k++) {
      //armor piece
      const currentItem = [
        'type=item',
        `items=minecraft:${ARMOR_TYPE}_${ARMOR_PIECES[k]}`,
        `texture.${ARMOR_TYPE}_${ARMOR_PIECES[k]}=${image}`,
        `texture.${ARMOR_TYPE}_${ARMOR_PIECES[k]}_overlay=${overlay}`,
        `nbt.display.Lore.${i}=ipattern:*+${plus}%*`,
        `nbt.display.Lore.${j + 1}=ipattern:*-${minus}%*`,
      ].join('\n')
      data.push(currentItem)
    }
  }
}

//-5 +150% +5
for (let i = 0; i < 12; i++) {
  // lore line 1
  for (let j = i; j < 12; j++) {
    //lore line 2
    for (let k = 0; k < ARMOR_PIECES.length; k++) {
      //armor piece
      const currentItem = [
        'type=item',
        `items=minecraft:${ARMOR_TYPE}_${ARMOR_PIECES[k]}`,
        `texture.${ARMOR_TYPE}_${ARMOR_PIECES[k]}=${image}`,
        `texture.${ARMOR_TYPE}_${ARMOR_PIECES[k]}_overlay=${overlay}`,
        `nbt.display.Lore.${i}=ipattern:*-${minus}%*`,
        `nbt.display.Lore.${j + 1}=ipattern:*+${plus}%*`,
      ].join('\n')
      data.push(currentItem)
    }
  }
}

data.forEach((elem, ix) => {
  fs.writeFile(`./${plus}${minus}/${ix}.properties`, elem, () => {})
})
