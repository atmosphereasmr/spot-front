import React, { Component } from 'react'
import './search.css'

export default class Search extends Component {

    componentDidMount() {

        const rihanna = document.getElementById('rihanna-ball')
        const rihannaTop = rihanna.offsetTop
        const rihannaLeft = rihanna.offsetLeft
        const rihannaWidth = rihanna.offsetWidth
        const rihannaHeight = rihanna.offsetHeight

        const goBackBall = document.getElementById('go-back-ball')
        goBackBall.style = `top: ${rihannaTop}px; left: ${rihannaLeft}px; width: ${rihannaWidth}px; height: ${rihannaHeight}px;`

        const gaga = document.getElementById('lady-gaga-ball')
        const gagaTop = gaga.offsetTop
        const gagaLeft = gaga.offsetLeft
        const gagaWidth = gaga.offsetWidth
        const gagaHeight = gaga.offsetHeight

        const listenBall = document.getElementById('listen-ball')
        listenBall.style = `top: ${gagaTop}px; left: ${gagaLeft}px; width: ${gagaWidth}px; height: ${gagaHeight}px;`
    }

    constructor(props) {
        super(props)
        this.state = {
            chosen: "",
            chosenRight: ""
        }
    }

    turnOff() {
        console.log(3333)
    }

    Chosen(artist) {
        const eminem = document.getElementById('eminem-ball')
        const rihanna = document.getElementById('rihanna-ball')
        const drake = document.getElementById('drake-ball')
        const lady_gaga = document.getElementById('lady-gaga-ball')
        const manson = document.getElementById('manson-ball')

        if (artist === "eminem") {

            const eminemRight = eminem.offsetLeft
            this.setState({ chosenRight: eminemRight, chosen: "eminem" })

            const element = document.getElementById('drake-ball')
            const right = element.offsetLeft


            eminem.style = `background-image: url('https://image.ibb.co/nAfrgn/eminem_dark.jpg'); position: relative; transform: translateX(${right}px); transition: 0.5s; cursor: none;`

            const title = document.getElementById('eminem-title')
            title.style = "opacity: 1;"

            this.Hover = function () { }
            this.HoverOff = function () { }

            rihanna.style = "animation: ball-hide 0.5s forwards; pointer-events: none;"
            drake.style = "animation: ball-hide 0.5s forwards; pointer-events: none;"
            lady_gaga.style = "animation: ball-hide 0.5s forwards; pointer-events: none;"
            manson.style = "animation: ball-hide 0.5s forwards; pointer-events; none;"

            const goBackBall = document.getElementById("go-back-ball")
            goBackBall.className = "go-back-ball-on"

            const listenBall = document.getElementById('listen-ball')
            listenBall.className = "listen-ball-on"

        }
        if (artist === "rihanna") {

            const rihannaRight = eminem.offsetLeft
            this.setState({ chosenRight: rihannaRight, chosen: "rihanna" })

            eminem.style = "animation: ball-hide 0.5s forwards;"
            drake.style = "animation: ball-hide 0.5s forwards;"
            lady_gaga.style = "animation: ball-hide 0.5s forwards;"
            manson.style = "animation: ball-hide 0.5s forwards;"

            const element = document.getElementById('drake-ball')
            const right = element.offsetLeft
            const rihanna_dist = document.getElementById('rihanna-ball').offsetLeft
            const correct_dist = right - rihanna_dist

            rihanna.style = `background-image: url('https://image.ibb.co/cCWTu7/rihanna_dark.jpg'); position: relative; transform: translateX(${correct_dist}px); transition: 0.5s; cursor: none;`

            const title = document.getElementById('rihanna-title')
            title.style = "opacity: 1;"

            this.Hover = function () { }
            this.HoverOff = function () { }

            const goBackBall = document.getElementById("go-back-ball")
            goBackBall.className = "go-back-ball-on"

            const listenBall = document.getElementById('listen-ball')
            listenBall.className = "listen-ball-on"
        }
        if (artist === "drake") {

            const drakeRight = eminem.offsetLeft
            this.setState({ chosenRight: drakeRight, chosen: "drake" })

            rihanna.style = "animation: ball-hide 0.5s forwards;"
            eminem.style = "animation: ball-hide 0.5s forwards;"
            lady_gaga.style = "animation: ball-hide 0.5s forwards;"
            manson.style = "animation: ball-hide 0.5s forwards;"


            this.Hover = function () { }
            this.HoverOff = function () { }

            drake.style = `background-image: url('https://image.ibb.co/jOw8Yc/drake_dark.jpg');`

            const title = document.getElementById('drake-title')
            title.style = "opacity: 1;"

            const goBackBall = document.getElementById("go-back-ball")
            goBackBall.className = "go-back-ball-on"

            const listenBall = document.getElementById('listen-ball')
            listenBall.className = "listen-ball-on"
        }
        if (artist === "lady-gaga") {

            const gagaRight = eminem.offsetLeft
            this.setState({ chosenRight: gagaRight, chosen: "lady-gaga" })

            rihanna.style = "animation: ball-hide 0.5s forwards;"
            drake.style = "animation: ball-hide 0.5s forwards;"
            eminem.style = "animation: ball-hide 0.5s forwards;"
            manson.style = "animation: ball-hide 0.5s forwards;"

            const element = document.getElementById('drake-ball')
            const right = element.offsetLeft
            const lady_gaga_dist = document.getElementById('lady-gaga-ball').offsetLeft
            const correct_dist = right - lady_gaga_dist

            lady_gaga.style = `background-image: url('https://image.ibb.co/jqE6KH/lady_gaga_dark.jpg'); position: relative; transform: translateX(${correct_dist}px); transition: 0.5s; cursor: none;`

            const title = document.getElementById('lady-gaga-title')
            title.style = "opacity: 1;"


            this.Hover = function () { }
            this.HoverOff = function () { }

            const goBackBall = document.getElementById("go-back-ball")
            goBackBall.className = "go-back-ball-on"

            const listenBall = document.getElementById('listen-ball')
            listenBall.className = "listen-ball-on"
        }
        if (artist === "manson") {
            rihanna.style = "animation: ball-hide 0.5s forwards;"
            drake.style = "animation: ball-hide 0.5s forwards;"
            lady_gaga.style = "animation: ball-hide 0.5s forwards;"
            eminem.style = "animation: ball-hide 0.5s forwards;"


            const element = document.getElementById('drake-ball')
            const right = element.offsetLeft
            const manson_dist = document.getElementById('manson-ball').offsetLeft
            const correct_dist = right - manson_dist

            manson.style = `background-image: url('https://image.ibb.co/npxnRx/marilyn_dark.jpg'); position: relative; transform: translateX(${correct_dist}px); transition: 0.5s; cursor: none;`

            const title = document.getElementById('manson-title')
            title.style = "opacity: 1;"

            this.Hover = function () { }
            this.HoverOff = function () { }

            const goBackBall = document.getElementById("go-back-ball")
            goBackBall.className = "go-back-ball-on"

            const listenBall = document.getElementById('listen-ball')
            listenBall.className = "listen-ball-on"
        }

        const ball1 = document.getElementById('green-ball-1')
        const ball2 = document.getElementById('green-ball-2')
        const ball3 = document.getElementById('green-ball-3')
        const ball4 = document.getElementById('grey-ball-1')
        const ball5 = document.getElementById('grey-ball-2')
        const ball6 = document.getElementById('grey-ball-3')
        ball1.className = "green-ball"
        ball2.className = "green-ball"
        ball3.className = "green-ball"
        ball4.className = "grey-ball"
        ball5.className = "grey-ball"
        ball6.className = "grey-ball"


    }

    Hover(title) {
        const lighten = document.getElementById(title)
        lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
    }

    HoverOff(title) {
        const lighten = document.getElementById(title)
        lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
    }

    goBack() {
        const eminem = document.getElementById('eminem-ball')
        const rihanna = document.getElementById('rihanna-ball')
        const drake = document.getElementById('drake-ball')
        const lady_gaga = document.getElementById('lady-gaga-ball')
        const manson = document.getElementById('manson-ball')

        if (this.state.chosen === "eminem") {
            eminem.style = `transform: translateX(${this.state.chosenRight}px); transition: 0.5s; background-image: url(https://image.ibb.co/iJQVeH/eminem.png)`

            const title = document.getElementById('eminem-title')
            title.style = "opacity: 0; transition: 0.5s"

            const goBack = document.getElementById('go-back-ball')
            const listenBall = document.getElementById('listen-ball')

            goBack.className = "go-back-ball"
            listenBall.className = "listen-ball"

            rihanna.style = "animation: ball-appear 0.5s forwards;"
            drake.style = "animation: ball-appear 0.5s forwards;"
            lady_gaga.style = "animation: ball-appear 0.5s forwards;"
            manson.style = "animation: ball-appear 0.5s forwards;"

            this.Hover = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
            }

            this.HoverOff = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
            }
        }

        if (this.state.chosen === "rihanna") {
            rihanna.style = `transform: translateX(${this.state.chosenRight}px); transition: 0.5s; background-image: url(https://image.ibb.co/cdnXtc/rihanna.jpg)`

            const title = document.getElementById('rihanna-title')
            title.style = "opacity: 0; transition: 0.5s"

            const goBack = document.getElementById('go-back-ball')
            const listenBall = document.getElementById('listen-ball')

            goBack.className = "go-back-ball"
            listenBall.className = "listen-ball"

            eminem.style = "animation: ball-appear 0.5s forwards;"
            drake.style = "animation: ball-appear 0.5s forwards;"
            lady_gaga.style = "animation: ball-appear 0.5s forwards;"
            manson.style = "animation: ball-appear 0.5s forwards;"

            this.Hover = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
            }

            this.HoverOff = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
            }
        }

        if (this.state.chosen === "drake") {

            drake.style = `transition: 0.5s; background-image: url(https://image.ibb.co/h17e6x/drake.jpg)`

            const title = document.getElementById('drake-title')
            title.style = "opacity: 0; transition: 0.5s"

            const goBack = document.getElementById('go-back-ball')
            const listenBall = document.getElementById('listen-ball')

            goBack.className = "go-back-ball"
            listenBall.className = "listen-ball"

            eminem.style = "animation: ball-appear 0.5s forwards;"
            rihanna.style = "animation: ball-appear 0.5s forwards;"
            lady_gaga.style = "animation: ball-appear 0.5s forwards;"
            manson.style = "animation: ball-appear 0.5s forwards;"

            this.Hover = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
            }

            this.HoverOff = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
            }
        }

        if (this.state.chosen === "lady-gaga") {

            lady_gaga.style = `transform: translateX(${this.state.chosenRight}px); transition: 0.5s; background-image: url(https://image.ibb.co/nrfozH/lady_gaga.jpg)`

            const title = document.getElementById('lady-gaga-title')
            title.style = "opacity: 0; transition: 0.5s"

            const goBack = document.getElementById('go-back-ball')
            const listenBall = document.getElementById('listen-ball')

            goBack.className = "go-back-ball"
            listenBall.className = "listen-ball"

            eminem.style = "animation: ball-appear 0.5s forwards;"
            rihanna.style = "animation: ball-appear 0.5s forwards;"
            drake.style = "animation: ball-appear 0.5s forwards;"
            manson.style = "animation: ball-appear 0.5s forwards;"

            this.Hover = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
            }

            this.HoverOff = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
            }
        }

        if (this.state.chosen === "manson") {

            manson.style = `transform: translateX(${this.state.chosenRight}px); transition: 0.5s; background-image: url(https://image.ibb.co/nrfozH/lady_gaga.jpg)`

            const title = document.getElementById('manson-title')
            title.style = "opacity: 0; transition: 0.5s"

            const goBack = document.getElementById('go-back-ball')
            const listenBall = document.getElementById('listen-ball')

            goBack.className = "go-back-ball"
            listenBall.className = "listen-ball"

            eminem.style = "animation: ball-appear 0.5s forwards;"
            rihanna.style = "animation: ball-appear 0.5s forwards;"
            drake.style = "animation: ball-appear 0.5s forwards;"
            lady_gaga.style = "animation: ball-appear 0.5s forwards;"

            this.Hover = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-in 0.5s 0s forwards;"
            }

            this.HoverOff = function (title) {
                const lighten = document.getElementById(title)
                lighten.style = "animation: title-fade-out 0.5s 0s forwards;"
            }

        }
    }

    render() {
        return (
            <div className="search-background-container">
                <div className="search-background-image">
                    <div className="flash-top-header">
                        Your music
                    </div>
                    <div className="flash-title">
                        Spotlightify
                    </div>
                    <div className="flash-bottom-header">
                        Illuminated
                    </div>
                </div>
                <div className="artist-container" id="container">
                    <div className="artist-circle-eminem" id="eminem-ball" onMouseOver={() => this.Hover("eminem-title")} onMouseLeave={() => this.HoverOff("eminem-title")} onClick={() => this.Chosen('eminem')}>
                        <div className="artist-title" id="eminem-title">
                            Eminem
                        </div>
                    </div>
                    <div className="artist-circle-rihanna" id="rihanna-ball" onMouseOver={() => this.Hover("rihanna-title")} onMouseLeave={() => this.HoverOff("rihanna-title")} onClick={() => this.Chosen('rihanna')}>
                        <div className="artist-title" id="rihanna-title">
                            Rihanna
                        </div>
                    </div>
                    <div className="artist-circle-drake" id="drake-ball" onMouseOver={() => this.Hover("drake-title")} onMouseLeave={() => this.HoverOff("drake-title")} onClick={() => this.Chosen('drake')}>
                        <div className="artist-title" id="drake-title">
                            Drake
                        </div>
                    </div>
                    <div className="artist-circle-lady-gaga" id="lady-gaga-ball" onMouseOver={() => this.Hover("lady-gaga-title")} onMouseLeave={() => this.HoverOff("lady-gaga-title")} onClick={() => this.Chosen('lady-gaga')}>
                        <div className="artist-title" id="lady-gaga-title">
                            Lady Gaga
                        </div>
                    </div>
                    <div className="artist-circle-marilyn" id="manson-ball" onMouseOver={() => this.Hover("manson-title")} onMouseLeave={() => this.HoverOff("manson-title")} onClick={() => this.Chosen('manson')}>
                        <div className="artist-title" id="manson-title">
                            Marilyn Manson
                        </div>
                    </div>
                </div>
                <div className="green-row-container-1">
                    <div className="black-ball"></div>
                    <div className="green-ball-off" id="green-ball-1"></div>
                    <div className="green-ball-off" id="green-ball-2"></div>
                    <div className="green-ball-off" id="green-ball-3"></div>
                    <div className="black-ball"></div>
                </div>
                <div className="green-row-container-1">
                    <div className="black-ball"></div>
                    <div className="grey-ball-off" id="grey-ball-1"></div>
                    <div className="grey-ball-off" id="grey-ball-2"></div>
                    <div className="grey-ball-off" id="grey-ball-3"></div>
                    <div className="black-ball"></div>
                </div>
                <div className="go-back-ball" id="go-back-ball" onClick={() => this.goBack()}>
                    Go Back
                </div>
                <div className="listen-ball" id="listen-ball">
                    Listen on Spotify
                </div>
            </div>
        )
    }
}