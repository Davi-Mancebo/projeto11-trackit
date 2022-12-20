import styled from "styled-components";

export const GeralLogin = styled.div`
    font-family: 'LexendDeca',sans-serif;
    columns: #dbdbdb;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding-top: 68px;

    box-sizing: border-box;

    input{
        width: 80%;
        height: 45px;

        border: 1px solid #d4d4d4;
        border-radius: 4.64px;

        font-size: 20px;

        margin-bottom: 6px;

        padding-left: 11px;
    }
    input::placeholder{
        font-size: 20px;
        
        color: #dbdbdb;
    }

    button{
        width: 80%;
        height: 45px;

        font-size: 21px;

        color: #FFFFFF;

        background-color: #52B6FF;
        border: 1px solid;
        border-radius: 4.64px;

        margin-bottom: 25px;
    }

    img{
        width: 180px;
        height: 180px;

        margin-bottom: 32px;
    }
    p{
        color: #52B6FF;
        font-size: 14px;

        text-decoration: dashed #52B6FF;
    }  
`

export const Geral = styled.div`
    box-sizing: border-box;

    padding: 70px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;

    font-family: 'Lexend Deca', sans-serif;

    background-color: #E5E5E5;

    h1{
        margin-left: 18px;
        color: #126BA5;
        font-size: 22.98px;
        
        margin-top: 28px;
    }
    h2{
        margin-top: 3px;
        color: #BABABA;
    }
    p{
        margin-left: 18px;
        margin-top: 17px;
        font-size: 18px;
        color: #666666;
        font-size: 17.98px;

    
}
` 
export const Habits = styled.div`
    margin-top: 18px;

    width: 95%;

    padding: 0px 18px;

    display: flex;

    justify-content: space-between;
    align-items: center;

    font-family: 'Lexend Deca', sans-serif;;
h3{
    font-size: 23px;
    color: #126BA5;
}

div{
    width: 40px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #52B6FF;

    color: #FFFFFF;

    border-radius: 5px;
}
`
export const Add = styled.div`
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    width: 80%;
    height: 180px;
    background-color: #FFFFFF;

    border-radius: 5px;

    font-family: 'Lexend Deca', sans-serif;

    input{
        width: 80%;
        height: 45px;

        padding-left: 11px;

        border: 1px solid #d4d4d4;
        border-radius: 5px;
        color: #666666;
        font-size: 19.98px;
        
        position: relative;
    }
    input::placeholder{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19.98px;
        color: #dbdbdb;
    }
    .botoes{
        width: 100%;

        display: flex;
        margin-top: 8px;
        margin-left: 15%;
        button{
            border: 1px solid #dbdbdb;
            border-radius: 5px;
            color: #dbdbdb;
            margin-left: 5px;
        }
    }
    .finalizar{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: flex-end;


        margin-top: 20px;
        margin-left: 35%;
        p{
            font-size: 15.98px;
            color: #52B6FF;
            margin-right: 23px;

            margin-bottom: 15px;
        }
        button{
            width: 84px;
            height: 35px;

            font-family: 'Lexend Deca', sans-serif;
            font-size: 15.98;
            color: #ffffff;

            background-color: #52B6FF;

            border: 1px;
            border-radius: 4.64px;
        }
    }
`
export const Habito = styled.div`
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    width: 80%;
    height: 91px;
    background-color: #FFFFFF;

    border-radius: 5px;

    font-family: 'Lexend Deca', sans-serif;

    h4{
      width: 80%;

      color: #666666;

      font-size: 19.98px;

      margin-top: 13px;
      margin-bottom: 8px;
    }
    .botoes{
        width: 100%;

        display: flex;
        margin-top: 8px;
        margin-left: 15%;

        button{
            border: 1px solid #dbdbdb;
            border-radius: 5px;
            color: #dbdbdb;
            margin-left: 5px;
        }
    }
`

export const HabitoDia = styled.div`
    box-sizing: border-box;

    width: 80%;
    height: 94px;

    padding: 13px 15px;

    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: space-around;


    .dados{
        h1{
            color: #666666;
            font-size: 20px;
            margin-bottom: 7px;
        }
        p{
            font-size: 12.98;
            color: #666666;
        }
    }
    .correto{
        background-color: #8FC549;

        width: 69px;
        height: 69px;
    }
`

export const Top = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #126BA5;

    position: fixed;
    top: 0;
    z-index: 1;

    padding-left: 18px;
    padding-right: 18px;
    
    font-family: 'Playball', cursive;;
    h2{
        font-size: 40px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;

        border-radius: 98.5px;
    }
`
export const Bottom = styled.footer`
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;

    padding: 0px 18px;

    position: fixed;
    bottom: 0;

    background-color: #ffffff;

    grid-template-columns: 1fr 1fr 1fr;
    z-index: 1;
    .spaceProgressBar {
        position: relative;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        a {
        color: #52b6ff;
        font-size: 17.98px;
        }
        :hover {
        cursor: pointer;
        text-decoration-line: underline;
        }
  }
  .CircularProgressbar {
  /*
   * This fixes an issue where the CircularProgressbar svg has
   * 0 width inside a "display: flex" container, and thus not visible.
   */
  width: 100%;
  /*
   * This fixes a centering issue with CircularProgressbarWithChildren:
   * https://github.com/kevinsqi/react-circular-progressbar/issues/94
   */
  vertical-align: middle;
}

.CircularProgressbar .CircularProgressbar-path {
  stroke: #3e98c7;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease 0s;
}

.CircularProgressbar .CircularProgressbar-trail {
  stroke: #d6d6d6;
  /* Used when trail is not full diameter, i.e. when props.circleRatio is set */
  stroke-linecap: round;
}

.CircularProgressbar .CircularProgressbar-text {
  fill: #3e98c7;
  font-size: 20px;
  dominant-baseline: middle;
  text-anchor: middle;
}

.CircularProgressbar .CircularProgressbar-background {
  fill: #d6d6d6;
}

/*
 * Sample background styles. Use these with e.g.:
 *
 *   <CircularProgressbar
 *     className="CircularProgressbar-inverted"
 *     background
 *     percentage={50}
 *   />
 */
.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {
  fill: #3e98c7;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
  fill: #fff;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
  stroke: #fff;
}

.CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
  stroke: transparent;
}
`;

export const BarraProgresso = styled.div`
  width: 91px;
  height: 91px;
  font-family: "Lexend Deca", sans-serif;
  position: fixed;

  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
`;
