let convictions = []

export const useConvictions = () => convictions.sort().slice()

export const getConvictions = () => {
  console.log("*****I AM GOING TO FETCH THE CONVICTIONS DATA*****")
  return fetch("http://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(
      parsedConvictions => {
        // console.table(parsedConvictions)
        convictions = parsedConvictions.slice()
        console.log("*****I FOR SURE HAVE THAT CONVICTIONS DATA*****")
      }
    )
}