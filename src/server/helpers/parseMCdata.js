const buildCustomObject = (data) => {
    const score = parseScoreTag(data.score_tag)
    const {agreement, subjectivity, confidence, irony} = data;
    return {score,agreement,subjectivity,confidence,irony}
}

const parseScoreTag = (tag) => {
    scoreDict = {
        "P+": "strong positive",
        "P": "positive",
        "NEU": "neutral",
        "N": "negative",
        "N+": "strong negative",
        "NONE": "without polarity",
    }
    return scoreDict[tag].toUpperCase()
}

exports.buildCustomObject = buildCustomObject
