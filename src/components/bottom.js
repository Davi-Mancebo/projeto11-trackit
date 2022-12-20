import styled from "styled-components";
import { useContext } from "react";
import {buildStyles} from "react-circular-progressbar";

import React from "react";
import { Link } from "react-router-dom";
import { BarraProgresso, Bottom } from "../assets/css/style";
import { CircularProgressbar } from "react-circular-progressbar";

export default function Base() {
    return (
      <Bottom>
        <div>
          <Link to="/habitos">Hábitos </Link>
        </div>
          <BarraProgresso>
            <Link to="/hoje">
            <CircularProgressbar
              value={10}
              text={`Hoje`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
              })}
            />
            </Link>
          </BarraProgresso>
  
        <div>
          <Link to="/historico">Histórico</Link>
        </div>
      </Bottom>
    );
  }



