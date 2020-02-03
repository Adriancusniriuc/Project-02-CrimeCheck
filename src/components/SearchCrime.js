// import React from 'react'
// import axios from 'axios'

// import CrimeMap from './CrimeMap'

// // import CrimeResult from './CrimeResult'

// class SearchCrime extends React.Component {

//   state = {
//     crimeCategories: [],
//     // result: [],
//     // resultText: '',
//     selected: ''
//     // intervalCounter: 0
//   }
//   // async componentDidMount() {
//   //   try {
//   //     const res = await axios.get('https://data.police.uk/api/crime-categories')
//   //     console.log(res.data)
//   //     this.setState({ crimeCategories: res.data })

//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   // }

//   // handleChange = ({ target: { select, value } }) => {
//   //   const selected = { ...this.state.selected, [select]: value }
//   //   console.log(selected)
//   //   this.setState({ selected })
//   // }

//   handleChange = (e) => {
//     const selected = e.target.value
//     this.setState( { selected } )
//     console.log(this.state.selected)
//   }

//   // handleSubmit = async e => {
//   //   e.preventDefault()
//   //   try {
//   //     const res = []
//   //     const finalRes = []
//   //     console.log(this.state.selected)

//   //     const interval = setInterval(async () => {
//   //       if (this.state.forces.length >= this.state.intervalCounter) {
//   //         res.push(await axios.get(`https://data.police.uk/api/crimes-no-location?category=${this.state.selected}&force=${this.state.forces[this.state.intervalCounter].id}`))
//   //         this.setState[{ intervalCounter: this.state.intervalCounter += 1 }]
//   //       } else {
//   //         clearInterval(interval)
//   //         res.forEach( e => {
//   //           e.data.forEach( ee=> {
//   //             finalRes.push(ee)
//   //           })
//   //         })
//   //         this.setState({ intervalCounter: 0, result: finalRes  })
//   //         // this.setState({ intervalCounter: 0, result: finalRes, resultText: finalRes.map(e=>( e.map(ee => ( Object.entries(ee) )) ).join('<hr />')) })
//   //       }
//   //       console.log(res)
//   //     }, 300)
      
//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   // }



//   render() {
//     return (
//       <>
//       {/* <form onSubmit={this.handleSubmit}>
//         <select onChange={this.handleChange}>
//           {this.state.crimeCategories.map((category, index) => (
//             <option key={index.toString()}  value={category.url}>{category.name}</option>
//           ))}
//         </select>
//         <button type="submit">SearchCrime</button>
//       </form> */}
//           {/* <textarea value={this.state.resultText} readOnly style={{ width: '400px', height: '200px' }}></textarea> */}
//           <div>
//             {/* {this.state.result.map((item, index) => (
//               <div key={index.toString()}>
//                 <label>Category: <span>{item.category}</span></label>
//                 <label> Status: <span>{item.outcome_status.category}</span></label>
//               </div>
//             ))} */}
//           </div>
//           {/* <CrimeMap
//             crimeCategories={this.state.crimeCategories}
//             forces ={this.state.forces}
//           /> */}
//       {/* Map Class goes here */}
//       </>
//     )
//   }
// }


// export default SearchCrime