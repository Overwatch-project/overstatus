import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { ContentBox } from "./styles";

export default function Skills({abilities}) {
    const { keyHero } = useParams();
    console.log(abilities)
    return (
      <>
      <ContentBox bgcolor="#9B9999">

      </ContentBox>
      </>
    );
  }
  