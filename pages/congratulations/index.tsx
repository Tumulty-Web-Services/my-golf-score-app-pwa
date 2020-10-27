import React from 'react'
import ButtonLink from '../../components/ButtonLink'
import PartyPopperSVG from './partypopper-icon-300x300.svg'

type Props = {
  score: string
}

export default function Congratulations({ score = 'Par' }: Props): JSX.Element {
  return (
    <div>
      <div className="congratulations-container">
        <h2>Congratulations!</h2>
        <h3>You got {score}</h3>
        <PartyPopperSVG style={{ marginTop: '30px' }} />
      </div>
      <div className="button-container">
        <ButtonLink link="/holes/3" label="Next Hole" />
      </div>
      <style jsx>{`
        div {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 30vh;
          display: flex;
          align-items: center;
        }

        h2,
        h3 {
          font-family: 'Roboto';
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 1px;
          font-weight: 900;
          margin-bottom: 0;
          margin-top: 10px;
          color: #ffea82;
          text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.44);
        }

        h2 {
          font-size: 2.3rem;
        }

        h3 {
          font-size: 1.7rem;
        }

        .button-container {
          min-width: 320px;
        }
      `}</style>
    </div>
  )
}
