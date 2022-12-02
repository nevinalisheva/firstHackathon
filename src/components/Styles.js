import styled from "styled-components";

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  opacity: 0.9;
  position: fixed;
  right: 0.5%;
  bottom: 20px;
  height: 3rem;
  font-size: 2.5rem;
  z-index: 1;
  cursor: pointer;
  color: rgb(245, 245, 245, 0.6);
  display: inline-block;
	-webkit-box-sizing:border-box;
	   -moz-box-sizing:border-box;
	        box-sizing:border-box;
	font-family: 'Lobster', cursive;
	text-decoration: none;
	color: #FFF;
	text-shadow: 0 1px 2px rgba(0,0,0,0.75);
	background: #5e0d0c;
	outline: none;
	border-radius: 15px;
	border: 1px solid #4c0300;
	box-shadow:
		inset 1px 1px 0px rgba(255,255,255,0.25), /* highlight */
		inset 0 0 6px #a23227, /* inner glow */
		inset 0 80px 80px -40px #ac3223, /* gradient */
		1px 1px 3px rgba(0,0,0,0.75); /* shadow */
		
}

  @media (max-width: 576px) {
    font-size: 2rem;
    margin-right: 5px;
  } ;
`;
