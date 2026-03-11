<template>
  <div class="container2">
    <span class="approvalBar">
      USP (Conservative ) Approval:
      <span>{{ Conservative_love }}%</span>
    </span>
    <span class="approvalBar">
      USP (Reformist) Approval : <span>{{ Liberal_love }}%</span>
    </span>
    <span class="approvalBar">
      NFP (Ethno-Nationalist) Approval: <span>{{ Nationalist_love }}%</span>
    </span>
    <span class="approvalBar">
      PFJP (Democratic Socialist) Approval: <span>{{ Democratic_Socialism_love }}%</span>
    </span>
    <span>
      WPB (Ethnic Minority) Approval: <span>{{ Ethnic_love }}%</span>
    </span>
  </div>
  <div class="container">
    <h1 class="marginer">Sordland 1958 Constitution</h1>
    <img @click="increment" src="" alt="" />
    <img @click="preview" src="" />
    <img: src="" />
    <h1 class="marginer">Amendments</h1>
    <h2>Amendment 1: The Supreme Court</h2>
    <p></p>

    <h2>Amendment 2: Term Limits</h2>
    <div class="subContainer">
      <button @click="leftButtonClick(2)">&#8592;</button>
      <p>{{ s2 }}</p>
      <button @click="rightButtonClick(2)">&#8594;</button>
    </div>
    <h2>Amendment 3: Cabinet Positions</h2>
    <div class="subContainer">
      <button @click="leftButtonClick(3)">&#8592;</button>
      <span>{{ s3 }}</span>
      <button @click="rightButtonClick(3)">&#8594;</button>
    </div>

    <h2>Amendment 4: Veto Limitations</h2>
    <div class="subContainer">
      <button @click="leftButtonClick(4)">&#8592;</button>
      <p>{{ s4 }}</p>
      <button @click="rightButtonClick(4)">&#8594;</button>
    </div>
    <button>Click here to see if Parliament will accept your new Constitution</button>
    <RouterLink to="/test-view">Test Views</RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'

// party love values for the top bar
let Conservative_love = ref(45)
let Liberal_love = ref(45)
let Nationalist_love = ref(35)
let Democratic_Socialism_love = ref(35)
let Ethnic_love = ref(15)

let s1_val = 0
let s2_val = 0
let s3_val = 0
let s4_val = 0
let love_Multiplier = 1

let s2_array = ['No term limits', 'Two-term limit']
let s3_array = [
  'Cabinet members are appointed by the President at will',
  'Cabinet members are appointed by the President from an approved list presented by Parliament',
  'Cabinet members are appointed by Parliament',
]
let s4_array = [
  'The President may veto any bill',
  'Presidential vetoes can be overturned by a 2/3rd majority in Parliament',
  'The Presidential veto shall be abolished',
]

let leftist = {
  Con_change: -1,
  Lib_change: 3,
  Eth_change: 1,
  DemSoc_change: 2,
  Nat_change: -3,
}

let veryLeftist = {
  Con_change: -3,
  Lib_change: 2,
  Eth_change: 1,
  DemSoc_change: 4,
  Nat_change: -5,
}

let centrist = {
  Con_change: 1,
  Lib_change: 1,
  Eth_change: 2,
  DemSoc_change: 1,
  Nat_change: 1,
}

let centristObjectUsedForCodeLogic = {
  Con_change: -1,
  Lib_change: -1,
  Eth_change: -2,
  DemSoc_change: -1,
  Nat_change: -1,
}

let rightist = {
  Con_change: 1,
  Lib_change: -3,
  Eth_change: -1,
  DemSoc_change: -2,
  Nat_change: 3,
}

let veryRightist = {
  Con_change: 3,
  Lib_change: -2,
  Eth_change: -1,
  DemSoc_change: -4,
  Nat_change: 5,
}

let s1 = ref('')
let s2 = ref(s2_array[s2_val])
let s3 = ref(s3_array[s3_val])
let s4 = ref(s4_array[s4_val])

function amendment_arrow(input, amendmentVal, amendmentTextArray, ideology) {
  console.log(input + amendmentVal + amendmentTextArray)
  console.log(love_Multiplier + ' is the love_Multiplier')
  let amendment = ref(amendmentTextArray[amendmentVal])
  if (input === 'left') {
    console.log('Left button clicked')
    if (amendmentVal > 0) {
      amendmentVal -= 1
      console.log('The current value is ' + amendmentVal)
      amendment.value = amendmentTextArray[amendmentVal]
      console.log('Expected amendment: ' + amendment)
      console.log('Expected amendment: ' + amendmentTextArray[amendmentVal])
      Conservative_love.value += ideology.Con_change
      Liberal_love.value += ideology.Lib_change
      Ethnic_love.value += ideology.Eth_change
      Democratic_Socialism_love.value += ideology.DemSoc_change
      Nationalist_love.value += ideology.Nat_change
    } else {
      console.log('Array length: ' + amendmentTextArray.length)
      console.log('Array iteration: ' + (amendmentVal + 1))
      console.log('Desired value out of range')
      console.log('Expected amendment: ' + amendment)
      console.log('Expected amendment: ' + amendmentTextArray[amendmentVal])
    }
  } else if (input === 'right') {
    console.log('Right button clicked')
    if (amendmentVal < amendmentTextArray.length - 1) {
      console.log('Value is less than array length')
      love_Multiplier += 1
      amendmentVal += 1

      amendment.value = amendmentTextArray[amendmentVal]
      console.log('Expected amendment: ' + amendment)
      console.log('Expected amendment: ' + amendmentTextArray[amendmentVal])
      console.log(ideology.Con_change)
      Conservative_love.value += ideology.Con_change
      Liberal_love.value += ideology.Lib_change
      Ethnic_love.value += ideology.Eth_change
      Democratic_Socialism_love.value += ideology.DemSoc_change
      Nationalist_love.value += ideology.Nat_change
    } else {
      console.log('Array length: ' + amendmentTextArray.length)
      console.log('Array iteration: ' + (amendmentVal + 1))
      console.log('Desired value out of range')
      console.log('Expected amendment: ' + amendment)
    }
  } else {
    amendment.value = 'An unexpected error has occured'
    console.log('An unexpected error has occured on Amendment 3')
    console.log('Array length: ' + amendmentTextArray.length)
    console.log('Array iteration: ' + (amendmentVal + 1))
    console.log('Expected amendment: ' + amendment)
  }
  return amendmentVal
}

function leftButtonClick(input) {
  console.log('the multiplier is ' + love_Multiplier.value)
  if (input == 2) {
    s2_val = amendment_arrow('left', s2_val, s2_array, centrist)
    console.log('Inside leftButtonCLick s2_val = ' + s2_val)
    s2.value = s2_array[s2_val]
    console.log('s2 is equal to ' + s2)
  } else if (input == 3) {
    s3_val = amendment_arrow('left', s3_val, s3_array, centrist)
    console.log('Inside leftButtonCLick s3_val = ' + s3_val)
    s3.value = s3_array[s3_val]
    console.log('s3 is equal to ' + s3)
  } else if (input == 4) {
    s4_val = amendment_arrow('left', s4_val, s4_array, leftist)
    console.log('Inside leftButtonCLick s3_val = ' + s4_val)
    s4.value = s4_array[s4_val]
    console.log('s4 is equal to ' + s4)
  }
}

function rightButtonClick(input) {
  if (input == 2) {
    s2_val = amendment_arrow('right', s2_val, s2_array, centrist)
    console.log('Inside rightButtonCLick s2_val = ' + s2_val)
    s2.value = s2_array[s2_val]
    console.log('s2 is equal to ' + s2)
  } else if (input == 3) {
    s3_val = amendment_arrow('right', s3_val, s3_array, centrist)
    console.log('Inside rightButtonCLick s3_val = ' + s3_val)
    s3.value = s3_array[s3_val]
    console.log('s3 is equal to ' + s3)
  } else if (input == 4) {
    s4_val = amendment_arrow('right', s4_val, s4_array, rightist)
    console.log('Inside rightButtonCLick s3_val = ' + s4_val)
    s4.value = s4_array[s4_val]
    console.log('s4 is equal to ' + s4)
  }
}

let MP_votes = 0
let Parties_that_support_you = ref([])
function finalVoteCalculator(){
  if (Conservative_love.value > 50){
    MP_votes += 62
    Parties_that_support_you.value.push('United Sordland Party Conservatives')
  }
  else{}if (Liberal_love.value > 50){
    MP_votes += 62

    Parties_that_support_you.value.push('United Sordland Party Liberals')
  }
  else{}if (Nationalist_love.value > 50){
    MP_votes += 62

    Parties_that_support_you.value.push('National Front Party')
  }
  else{}if (Democratic_Socialism_love.value > 50){
    MP_votes += 62

    Parties_that_support_you.value.push('People`s Justice and Freedom Party')
  }
  else{}if (Ethnic_love.value > 50){
    MP_votes += 62

    Parties_that_support_you.value.push('Worker`s party of Bludia')
  }
  else{}

}

let showResults = ref(false)


function showResultFunction() {
  console.log('Old showResults value: ' + showResults.value)

  if (showResults.value == false) {
    showResults.value = true
    console.log('New showResults value: ' + showResults.value)
    return 
  } else {
    showResults.value = false 
    console.log('New showResults value: ' + showResults.value)
    return 
  }
    
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  /* max-width: 20vw; */
}
.container2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40vh;
}

.subContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.marginer {
  margin: 10px;
}
.approvalBar {
  border: 10px;
  border-color: black;
  margin: 10px;
  color: red;
}

button {
  margin: 5px;
}
</style>
