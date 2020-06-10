const fs = require('fs')
const args = process.argv

const source1 = args[2]
const source2 = args[3]

const rankingNew = require(source1)
const rankingOld = require(source2)

const diffObj = []

for(let i in rankingNew) {
    const pokemon = rankingNew[i]
    const pokemonId = pokemon.id
    const pokemonForm = pokemon.form

    let diff = 0
    const newRank = i
    let oldRank = -1
    for(let j in rankingOld) {
        const comparePoke = rankingOld[j]
        if(comparePoke.id == pokemonId
            && comparePoke.form == pokemonForm) {
            diff = -1 * (i - j)
            oldRank = j
        }
    }
    diffObj.push({
        pokemonId, pokemonForm, diff, newRank, oldRank, diffNorm: diff/newRank
    })
}

diffObj.sort((a,b) => a.diffNorm - b.diffNorm)

fs.writeFileSync('out.json', JSON.stringify(diffObj))