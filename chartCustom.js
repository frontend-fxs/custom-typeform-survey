const global = {
    formId: 'xiCUyUr0',
    storageKey: 'survey:rates-chart',
    surveyIsSubmitted: 'survey-is-submitted',
}

const getSurveyData = () => {
    const surveyData = localStorage.getItem(global.storageKey)
    return surveyData ? JSON.parse(surveyData) : {}
}

const setSurveyData = (data) => {
    localStorage.setItem(global.storageKey, JSON.stringify(data))
}

const createSurveyElements = () => {
    const surveyData = getSurveyData()
    const options = {
        height: 'calc(100% - 195px)',
        width: 'calc(100% - 32px)',
        buttonColor: '#e4871b',
        tooltip: "Tell us what you think about the new Chart",
        onSubmit: () => {
            surveyData[global.surveyIsSubmitted] = true;
            // Save in localstorage that the survey has been submited
            setSurveyData(surveyData)
        },
    }

    const { toggle } = window.tf.createPopover(global.formId, options)
}

const surveyLaunch = () => {
    const surveyData = getSurveyData()
    const surveyIsSubmitted = Boolean(surveyData[global.surveyIsSubmitted])
    if (!surveyIsSubmitted) createSurveyElements()
        // We only init the survey if the survey has not been submitted yet

}

const handleSurveyLaunch = () => {
    const surveyData = getSurveyData()
    const surveyIsSubmitted = Boolean(surveyData[global.surveyIsSubmitted])

    if (!surveyIsSubmitted) surveyLaunch()
}

window.onload = () => {
    handleSurveyLaunch()
} 