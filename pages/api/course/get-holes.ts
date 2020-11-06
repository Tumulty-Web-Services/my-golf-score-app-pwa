import { NextApiRequest, NextApiResponse } from 'next'
// import dbConnect from '../../utils/dbConnect'
// import GameStats, { GameStatsInterface } from '../../models/GameStats'

export default async function getHoles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ msg: 'get the holes api endpoint' })
  // if (req.method === 'POST') {
  //   await dbConnect()
  //   try {
  //       const results = JSON.parse(req.body)
  //       const course = results.course.replace(/"/g, '').replace(/-/g, ' ')
  //       const findGameStats: GameStatsInterface = await GameStats.findOne({
  //           course: course
  //       })

  //       const courseData = findGameStats.holes.map((data) => {
  //           return {
  //               hole: data.hole,
  //               par: data.par
  //           }
  //       })

  //       console.log(findGameStats)

  //     res
  //         .status(200)
  //         .json({
  //           status: 200,
  //           course:courseData,
  //           courseType: findGameStats.courseType
  //         })
  //   } catch (error) {
  //     console.error(error)
  //     res.status(error.status || 500).end(error.message)
  //   }
  // }
}
