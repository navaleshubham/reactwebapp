import React from "react";
import mobileamdcard from './../Assest/images/mobileamdcard.png'
import usaflag from './../Assest/images/usaflag.png'
import playstore from './../Assest/images/playstore.png'
import applestore from './../Assest/images/applestore.png'
import sequia from './../Assest/images/sequia.png'
import polychain from './../Assest/images/polychain.png'
import consys from './../Assest/images/consys.png'
import i215image from './../Assest/images/i215image.svg'
import blackcard from './../Assest/images/blackcard.png'
import blueskybluecard from './../Assest/images/blueskybluecard.png'
import oinkbluecard from './../Assest/images/oinkbluecard.png'

export default class Home extends React.Component{
    render() {
        return (
            <div>
                <div className='d-lg-flex d-sm-block mt-5 pt-5 justify-content-lg-around row-cols-lg-2 container'>
                    <div>
                        <div className="mt-5">
                            <div className="w-auto mt-5">
                                <h1 className="text-center h1 font-weight-500" style={{fontSize:'4rem'}}>
                                    The Most Powerful<br></br> Checking Account
                                </h1>
                                <h3 className="mt-5 mt-6 text-justify text-left h4 mb-5" style={{color: "grey"}}>
                                    Our checking account gives you higher returns than a savings account with no hidden
                                    fees.
                                </h3>
                            </div>
                            <div className='border-dark border mx-auto py-3 px-3' style={{borderRadius:'0 2em 0 2em',fontWeight:600}}>
                                <div className="d-flex  mx-auto">
                                    <img alt="Email" style={{width:'55px'}} src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/email.svg"/>
                                    <input type="email" name="userEmail"
                                           placeholder="Enter Email Address" value=""
                                           className="h-auto border-0 mx-2" style={{width:'330px'}}/>
                                    <button className='' type="submit" className="btn btn-primary px-3 py-2" style={{borderRadius:'0 2em 0 2em',fontWeight:600}}>Join Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='d-flex align-content-center'>
                                <img src={usaflag} style={{width:'50px',height:'30px'}}/>
                                <p className='align-content-center pt-1 pl-3' style={{color:"grey"}}>333 spots left for Priority Access</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='d-flex'>
                                <img className='mx-2' src={playstore} style={{width:'160px',height:'60px'}}/>
                                <img className='mx-2' src={applestore} style={{width:'160px',height:'60px'}}/>
                            </div>
                        </div>
                    </div>
                    <div className='w-auto'><img style={{width:'450px'}} src={mobileamdcard}/></div>
                </div>
                <div className='mt-5'>
                    <p className='text-center text-dark font-weight-bold' style={{letterSpacing:'2px'}}>BACKED BY THE BEST</p>
                    <div className='d-lg-flex justify-content-center d-sm-block '>
                        <img className='mx-5 mt-5 align-content-center' style={{width:'180px', height:'30px',marginTop:'12em !important'}} src={sequia}/>
                        <img className='mx-5 mt-5 align-content-center' style={{width:'180px', height:'70px'}} src={polychain}/>
                        <img className='mx-5 mt-5 align-content-center' style={{width:'180px', height:'60px'}} src={consys}/>
                    </div>
                    <div className='container mt-5 d-lg-flex d-sm-block'>
                        <div className='container'>
                            <p style={{color:'blue'}} className='text-left h4 font-weight-bold '>
                                Start saving for a rainy day fund
                            </p>
                            <h1 className='font-weight-bold text-left mt-3 text-justify w-75' style={{fontSize:'4/3em'}}>
                                Use Our Checking Account to Achieve Your Financial Goals
                            </h1>
                            <p className='test-left text-justify w-75' style={{fontWeight:500,letterSpacing:'2px'}}>
                                With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our partner bank. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.
                            </p>
                        </div>
                        <div>
                            <img src={i215image} style={{width:'400px',height:'500px'}}/>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='font-weight-bold'>Sign up early to save more</h1>
                    <h4 className='container text-center text-justify' style={{color:"grey",letterSpacing:'1px'}}>Depending on the level of your checking account, you’ll earn <br></br>  between 1.15%3 to 2.15%1 bonus rate.</h4>
                    <div className='container d-lg-flex justify-content-lg-around d-md-block d-sm-block'>
                        <div style={{marginTop:'15em'}} className='card shadow-lg mx-3 w-100 bg-light  mb-sm-5' >
                            <img className='mx-auto' src={blackcard}  style={{width:'90%',height:'200px',transform:'translateY(-80px)'}}/>
                            <div style={{transform:'translateY(-50px)'}}>
                                <p className='h5' style={{letterSpacing:'2px'}}>METAL</p>
                                <h1 className='font-weight-bolder' style={{color:"blue"}}>2.15%</h1>
                                <span><button className='btn-success rounded-lg border-0'>5%</button><span className='ml-2'>cash back</span> </span>
                            </div>
                            <div className='bg-white'>
                                <div>
                                    <div className='d-flex justify-content-between bg-white pt-4'>
                                        <p className='container'>2167/2500 spots</p>
                                        <p className='container'>333 spots left</p>

                                    </div>
                                    <div className="progress mx-4 bg-white mb-3">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "81%" ,height:'10px',borderRadius:'2em 0 0 2em'}}
                                             aria-valuenow="80" aria-valuemin="20" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{width: '34%',height:'10px',borderRadius:'0 2em  2em 0'}}
                                             aria-valuenow="60" aria-valuemin="0" aria-valuemax="20"></div>
                                    </div>
                                    <button className='btn-primary btn-lg w-75 border-0 mb-3' style={{borderRadius:'0 2em 0 2em'}}>Sign Up Now</button>
                                    <hr></hr>
                                    <h4 className='text-left container' style={{color:"gray",letterSpacing:'2px'}}>Includes</h4>
                                    <div className='container'>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>Charcoal Black Metal Card</span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>2.15%1 Bonus Rate Checking<span className='ml-4 pl-1'> Account</span></span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>5% Cash back on brands you love</span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>Free Cash Withdrawals</span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>Phone & Chat Support</span>
                                        </li>
                                        <p className='text-justify mt-4 container' style={{color:"grey"}}>
                                            Fund your account with a minimum opening deposit of <b>$1000</b>. 3 additional free ATM withdrawals per month from out of network ATMs.
                                        </p>

                                    </div>
                                    <div className='list-group-item list-group-item-success' style={{minWidth:'100%'}}>
                                        <span className='d-flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 object-contain" data-v-6c24aca2="" style={{width:'20px',heigth:'20px'}}>
                                                <path fill="#00A86B" d="M11 9h4c.265 0 .52-.105.707-.293C15.895 8.52 16 8.265 16 8c0-.265-.105-.52-.293-.707C15.52 7.105 15.265 7 15 7h-2V6c0-.265-.105-.52-.293-.707C12.52 5.105 12.265 5 12 5c-.265 0-.52.105-.707.293C11.105 5.48 11 5.735 11 6v1c-.796 0-1.559.316-2.121.879C8.316 8.44 8 9.204 8 10s.316 1.559.879 2.121C9.44 12.684 10.204 13 11 13h2c.265 0 .52.105.707.293.188.187.293.442.293.707 0 .265-.105.52-.293.707-.187.188-.442.293-.707.293H9c-.265 0-.52.105-.707.293C8.105 15.48 8 15.735 8 16c0 .265.105.52.293.707.187.188.442.293.707.293h2v1c0 .265.105.52.293.707.187.188.442.293.707.293.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-1c.796 0 1.559-.316 2.121-.879.563-.562.879-1.325.879-2.121s-.316-1.559-.879-2.121C14.56 11.316 13.796 11 13 11h-2c-.265 0-.52-.105-.707-.293C10.105 10.52 10 10.265 10 10c0-.265.105-.52.293-.707C10.48 9.105 10.735 9 11 9zm1-8c-2.176 0-4.302.645-6.111 1.854-1.81 1.209-3.22 2.926-4.052 4.936-.832 2.01-1.05 4.222-.626 6.356.425 2.134 1.472 4.094 3.01 5.632 1.54 1.539 3.5 2.586 5.633 3.01 2.134.425 4.346.207 6.355-.625 2.01-.833 3.729-2.243 4.937-4.052C22.355 16.302 23 14.176 23 12c0-2.917-1.159-5.715-3.222-7.778C17.715 2.159 14.918 1 12 1zm0 20c-1.78 0-3.52-.528-5-1.517-1.48-.989-2.634-2.394-3.315-4.039-.681-1.644-.86-3.454-.512-5.2.347-1.746 1.204-3.35 2.463-4.608 1.259-1.259 2.862-2.116 4.608-2.463 1.746-.347 3.556-.17 5.2.512 1.645.681 3.05 1.835 4.04 3.315C20.471 8.48 21 10.22 21 12c0 2.387-.948 4.676-2.636 6.364C16.676 20.052 14.387 21 12 21z" data-v-6c24aca2=""></path>
                                            </svg>
                                            <p className='pt-3 ml-2 text-dark'><strike> $11.99/m Membership Fee</strike></p>
                                        </span>
                                        <h4 className='text-left ml-4 font-weight-bold'>Free for 6 months</h4>
                                        <p className='text-left ml-4 font-weight-bold'>$60 Savings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'15em'}} className='card shadow-lg mx-3 w-100 bg-light  mb-sm-5' >
                            <img className='mx-auto' src={oinkbluecard}  style={{width:'90%',height:'200px',transform:'translateY(-80px)'}}/>
                            <div style={{transform:'translateY(-50px)'}}>
                                <p className='h5' style={{letterSpacing:'2px'}}>PREMIUM</p>
                                <h1 className='font-weight-bolder' style={{color:"blue"}}>1.65%</h1>
                                <span><button className='btn-success rounded-lg border-0'>4%</button><span className='ml-2'>cash back</span> </span>
                            </div>
                            <div className='bg-white'>
                                <div>
                                    <div className='d-flex justify-content-between bg-white pt-4 disabled'>
                                        <p className='container'>2000 spots</p>
                                        <p className='container'>2000 spots left</p>

                                    </div>
                                    <div className="progress mx-4 bg-white mb-3 disabled">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "0%" ,height:'10px',borderRadius:'2em 0 0 2em'}}
                                             aria-valuenow="0" aria-valuemin="20" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{width: '100%',height:'10px',borderRadius:'0 2em  2em 0'}}
                                             aria-valuenow="60" aria-valuemin="0" aria-valuemax="20"></div>
                                    </div>
                                    <button className='btn-secondary btn-lg w-75 border-0 mb-3 disabled' style={{borderRadius:'0 2em 0 2em'}}>Up Next</button>
                                    <hr></hr>
                                    <h4 className='text-left container' style={{color:"gray",letterSpacing:'2px'}}>Includes</h4>
                                    <div className='container'>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>Free Debit Card</span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>1.65%2 Bonus Rate Checking<span className='ml-4 pl-1'> Account</span></span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>4% Cash back on brands you love</span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>Free Cash Withdrawals</span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path   stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>Phone & Chat Support</span>
                                        </li>
                                        <p className='text-justify mt-4 container' style={{color:"grey"}}>
                                            Fund your account with a minimum opening deposit of $500. 2 additional free ATM withdrawals per month from out of network ATMs.
                                        </p>

                                    </div>
                                    <div className='list-group-item list-group-item-light border-bottom-0 bg-light' style={{minWidth:'100%'}}>
                                        <span className='d-flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 object-contain" data-v-6c24aca2="" style={{width:'20px',heigth:'20px'}}>
                                                <path fill="gray" d="M11 9h4c.265 0 .52-.105.707-.293C15.895 8.52 16 8.265 16 8c0-.265-.105-.52-.293-.707C15.52 7.105 15.265 7 15 7h-2V6c0-.265-.105-.52-.293-.707C12.52 5.105 12.265 5 12 5c-.265 0-.52.105-.707.293C11.105 5.48 11 5.735 11 6v1c-.796 0-1.559.316-2.121.879C8.316 8.44 8 9.204 8 10s.316 1.559.879 2.121C9.44 12.684 10.204 13 11 13h2c.265 0 .52.105.707.293.188.187.293.442.293.707 0 .265-.105.52-.293.707-.187.188-.442.293-.707.293H9c-.265 0-.52.105-.707.293C8.105 15.48 8 15.735 8 16c0 .265.105.52.293.707.187.188.442.293.707.293h2v1c0 .265.105.52.293.707.187.188.442.293.707.293.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-1c.796 0 1.559-.316 2.121-.879.563-.562.879-1.325.879-2.121s-.316-1.559-.879-2.121C14.56 11.316 13.796 11 13 11h-2c-.265 0-.52-.105-.707-.293C10.105 10.52 10 10.265 10 10c0-.265.105-.52.293-.707C10.48 9.105 10.735 9 11 9zm1-8c-2.176 0-4.302.645-6.111 1.854-1.81 1.209-3.22 2.926-4.052 4.936-.832 2.01-1.05 4.222-.626 6.356.425 2.134 1.472 4.094 3.01 5.632 1.54 1.539 3.5 2.586 5.633 3.01 2.134.425 4.346.207 6.355-.625 2.01-.833 3.729-2.243 4.937-4.052C22.355 16.302 23 14.176 23 12c0-2.917-1.159-5.715-3.222-7.778C17.715 2.159 14.918 1 12 1zm0 20c-1.78 0-3.52-.528-5-1.517-1.48-.989-2.634-2.394-3.315-4.039-.681-1.644-.86-3.454-.512-5.2.347-1.746 1.204-3.35 2.463-4.608 1.259-1.259 2.862-2.116 4.608-2.463 1.746-.347 3.556-.17 5.2.512 1.645.681 3.05 1.835 4.04 3.315C20.471 8.48 21 10.22 21 12c0 2.387-.948 4.676-2.636 6.364C16.676 20.052 14.387 21 12 21z" data-v-6c24aca2=""></path>
                                            </svg>
                                            <p className='pt-3 ml-2 text-dark'><strike> $6.99/m Membership Fee</strike></p>
                                        </span>
                                        <h4 className='text-left ml-4 font-weight-bold'>Coming Soon</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'15em'}} className='card shadow-lg mx-3 w-100 bg-light  mb-sm-5' >
                            <img className='mx-auto' src={blueskybluecard}  style={{width:'90%',height:'200px',transform:'translateY(-80px)'}}/>
                            <div style={{transform:'translateY(-50px)'}}>
                                <p className='h5' style={{letterSpacing:'2px'}}>BASIC</p>
                                <h1 className='font-weight-bolder' style={{color:"blue"}}>1.15%</h1>
                                <span><button className='btn-success rounded-lg border-0'>3%</button><span className='ml-2'>cash back</span> </span>
                            </div>
                            <div className='bg-white'>
                                <div>
                                    <div className='d-flex justify-content-between bg-white pt-4 disabled'>
                                        <p className='container'>10000 spots</p>
                                        <p className='container'>10000 spots left</p>

                                    </div>
                                    <div className="progress mx-4 bg-white mb-3 disabled">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "0%" ,height:'10px',borderRadius:'2em 0 0 2em'}}
                                             aria-valuenow="0" aria-valuemin="20" aria-valuemax="100"></div>
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{width: '100%',height:'10px',borderRadius:'0 2em  2em 0'}}
                                             aria-valuenow="60" aria-valuemin="0" aria-valuemax="20"></div>
                                    </div>
                                    <button className='btn-secondary btn-lg w-75 border-0 mb-3 disabled' style={{borderRadius:'0 2em 0 2em'}}>Coming Soon</button>
                                    <hr></hr>
                                    <h4 className='text-left container' style={{color:"gray",letterSpacing:'2px'}}>Includes</h4>
                                    <div className='container'>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>Free Debit Card</span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>1.15%2 Bonus Rate Checking<span className='ml-4 pl-1'> Account</span></span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>3% Cash back on brands you love</span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>Free Cash Withdrawals</span>
                                        </li>
                                        <li style={{listStyle:'none'}} className='text-left mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13"
                                                 className="w-045 h-0381 object-contain" data-v-6c24aca2="" style={{height:'20px',width:'20px'}}>
                                                <path   stroke="grey" stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M17 1L6 12 1 7" data-v-6c24aca2=""></path>
                                            </svg>
                                            <span className='ml-3'>Phone & Chat Support</span>
                                        </li>
                                        <p className='text-justify mt-4 container mb-5 pb-3' style={{color:"grey"}}>
                                            Fund your account with a minimum opening deposit of $0.
                                        </p>

                                    </div>
                                    <div className='list-group-item list-group-item-light border-bottom-0 bg-light' style={{minWidth:'100%'}}>
                                        <span className='d-flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 object-contain" data-v-6c24aca2="" style={{width:'20px',heigth:'20px'}}>
                                                <path fill="gray" d="M11 9h4c.265 0 .52-.105.707-.293C15.895 8.52 16 8.265 16 8c0-.265-.105-.52-.293-.707C15.52 7.105 15.265 7 15 7h-2V6c0-.265-.105-.52-.293-.707C12.52 5.105 12.265 5 12 5c-.265 0-.52.105-.707.293C11.105 5.48 11 5.735 11 6v1c-.796 0-1.559.316-2.121.879C8.316 8.44 8 9.204 8 10s.316 1.559.879 2.121C9.44 12.684 10.204 13 11 13h2c.265 0 .52.105.707.293.188.187.293.442.293.707 0 .265-.105.52-.293.707-.187.188-.442.293-.707.293H9c-.265 0-.52.105-.707.293C8.105 15.48 8 15.735 8 16c0 .265.105.52.293.707.187.188.442.293.707.293h2v1c0 .265.105.52.293.707.187.188.442.293.707.293.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-1c.796 0 1.559-.316 2.121-.879.563-.562.879-1.325.879-2.121s-.316-1.559-.879-2.121C14.56 11.316 13.796 11 13 11h-2c-.265 0-.52-.105-.707-.293C10.105 10.52 10 10.265 10 10c0-.265.105-.52.293-.707C10.48 9.105 10.735 9 11 9zm1-8c-2.176 0-4.302.645-6.111 1.854-1.81 1.209-3.22 2.926-4.052 4.936-.832 2.01-1.05 4.222-.626 6.356.425 2.134 1.472 4.094 3.01 5.632 1.54 1.539 3.5 2.586 5.633 3.01 2.134.425 4.346.207 6.355-.625 2.01-.833 3.729-2.243 4.937-4.052C22.355 16.302 23 14.176 23 12c0-2.917-1.159-5.715-3.222-7.778C17.715 2.159 14.918 1 12 1zm0 20c-1.78 0-3.52-.528-5-1.517-1.48-.989-2.634-2.394-3.315-4.039-.681-1.644-.86-3.454-.512-5.2.347-1.746 1.204-3.35 2.463-4.608 1.259-1.259 2.862-2.116 4.608-2.463 1.746-.347 3.556-.17 5.2.512 1.645.681 3.05 1.835 4.04 3.315C20.471 8.48 21 10.22 21 12c0 2.387-.948 4.676-2.636 6.364C16.676 20.052 14.387 21 12 21z" data-v-6c24aca2=""></path>
                                            </svg>
                                            <p className='pt-3 ml-2 text-dark'><strike> No Membership Fee</strike></p>
                                        </span>
                                        <h4 className='text-left ml-4 font-weight-bold'>Free Forever!</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
\
                    </div>
                </div>
            </div>
        )
    }
}