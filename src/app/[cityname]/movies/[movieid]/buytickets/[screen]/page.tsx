/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Link from "next/link";

const SelectScreen = () => {
  const screen = {
    name: "Screen 1",
    location: "PVR Cinemas, Forum Mall, Koramangala",
    timeslots: [
      {
        time: "10:00 AM",
        seats: [
          {
            // platinum
            type: "platinum",
            rows: [
              {
                // row 2
                rowname: "H",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "F",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 500,
          },
          {
            // gold
            type: "gold",
            rows: [
              {
                // row 2
                rowname: "E",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "C",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 300,
          },
          {
            // silver - 20 objects
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "A",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 150,
          },
        ],
      },
      {
        time: "1:30 PM",
        seats: [
          {
            // platinum
            type: "platinum",
            rows: [
              {
                // row 2
                rowname: "H",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "F",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 500,
          },
          {
            // gold
            type: "gold",
            rows: [
              {
                // row 2
                rowname: "E",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "C",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 300,
          },
          {
            // silver - 20 objects
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "A",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 150,
          },
        ],
      },
      {
        time: "4:00 PM",
        seats: [
          {
            // platinum
            type: "platinum",
            rows: [
              {
                // row 2
                rowname: "H",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "F",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 500,
          },
          {
            // gold
            type: "gold",
            rows: [
              {
                // row 2
                rowname: "E",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "C",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 300,
          },
          {
            // silver - 20 objects
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "A",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 150,
          },
        ],
      },
      {
        time: "8:30 PM",
        seats: [
          {
            // platinum
            type: "platinum",
            rows: [
              {
                // row 2
                rowname: "H",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "F",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 500,
          },
          {
            // gold
            type: "gold",
            rows: [
              {
                // row 2
                rowname: "E",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "C",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 300,
          },
          {
            // silver - 20 objects
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "A",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 150,
          },
        ],
      },
    ],
  };

  const movie = {
    moviename: "Jawan",
    screen: "4Dx",
    date: new Date(),
    language: "Hindi",
    type: "Action/Thriller",
    screens: [
      {
        name: "Screen 1",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
      {
        name: "Screen 2",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
      {
        name: "Screen 3",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
    ],
  };

  const [selectedTime, setSelectedTime] = React.useState<any>(
    screen.timeslots[0]
  );
  const [selectedSeats, setSelectedSeats] = React.useState<any[]>([]);

  const selectdeselectseat = (seat: any) => {
    const isselected = selectedSeats.find((s: any) => {
      return (
        s.row === seat.row && s.seat_id === seat.seat_id && s.col === seat.col
      );
    });
    if (isselected) {
      setSelectedSeats(
        selectedSeats.filter((s: any) => s.seat_id !== seat.seat_id)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const generateSeatLayout = () => {
    const timeIndex = screen.timeslots.findIndex(
      (t: any) => t.time === selectedTime.time
    );

    return screen.timeslots[timeIndex].seats.map(
      (seatType: any, index: number) => (
        <div
          className="overflow-x-auto sm:overflow-visible p-4 bg-white shadow rounded-lg w-full my-3 flex flex-col gap-2 items-center"
          key={index}
        >
          <h2 className="text-sm md:text-base font-medium border border-gray-300 rounded-full px-4 py-1 w-fit">
            {seatType.type} - Rs. {seatType.price}
          </h2>
          <div className="flex-col gap-4 mt-3">
            {seatType.rows.map((row: any, rowIndex: number) => (
              <div
                className="flex items-center gap-3 m-2 md:gap-5 min-w-max"
                key={rowIndex}
              >
                {/* Row name bubble */}
                <p className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#b92d14e8] text-white font-bold text-xs md:text-sm">
                  {row.rowname}
                </p>

                <div className="flex gap-2 md:gap-4">
                  {row.cols.map((col: any, colIndex: number) => (
                    <div className="flex gap-1 md:gap-2" key={colIndex}>
                      {col.seats.map((seat: any, seatIndex: number) => (
                        <div key={seatIndex}>
                          {seat.status === "available" && (
                            <span
                              className={`w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-md shadow cursor-pointer text-xs md:text-sm font-semibold ${
                                selectedSeats.find(
                                  (s: any) =>
                                    s.row === row.rowname &&
                                    s.seat_id === seat.seat_id &&
                                    s.col === colIndex
                                )
                                  ? "bg-[#b92d14e8] text-white"
                                  : "bg-white text-black"
                              }`}
                              onClick={() =>
                                selectdeselectseat({
                                  row: row.rowname,
                                  col: colIndex,
                                  seat_id: seat.seat_id,
                                  price: seatType.price,
                                })
                              }
                            >
                              {seatIndex + 1}
                            </span>
                          )}
                          {seat.status === "not-available" && (
                            <span className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-md shadow bg-gray-300 text-black text-xs md:text-sm font-semibold cursor-not-allowed">
                              {seatIndex + 1}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    );
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Header */}
      <div className="bg-white">
        <div className="bg-[#b92d14e8] p-3">
          <h1 className="text-base md:text-lg font-semibold">
            {movie.moviename} - {movie.language}
          </h1>
          <h3 className="text-white text-xs md:text-sm font-semibold border border-white px-3 py-1 rounded-full w-fit mt-1">
            {movie.type}
          </h3>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white flex flex-col items-center py-5 px-3 md:px-10">
        {/* Time Slots */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-3 md:my-5">
          {screen.timeslots.map((time: any, index: number) => (
            <h3
              key={index}
              className={`cursor-pointer border-2 px-4 py-1 rounded-full text-xs md:text-sm font-normal ${
                selectedTime.time === time.time
                  ? "border-[#b92d14e8] text-[#b92d14e8]"
                  : "border-gray-300"
              }`}
              onClick={() => {
                setSelectedTime(time);
                setSelectedSeats([]);
              }}
            >
              {time.time}
            </h3>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-5">
          <div className="flex items-center gap-1 md:gap-2">
            <span className="w-4 h-4 md:w-5 md:h-5 bg-gray-300 rounded-full"></span>
            <p className="text-xs md:text-sm font-semibold text-gray-500">
              Not available
            </p>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <span className="w-4 h-4 md:w-5 md:h-5 border border-gray-400 bg-white rounded-full"></span>
            <p className="text-xs md:text-sm font-semibold text-gray-500">
              Available
            </p>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <span className="w-4 h-4 md:w-5 md:h-5 bg-[#b92d14e8] text-white rounded-full"></span>
            <p className="text-xs md:text-sm font-semibold text-gray-500">
              Selected
            </p>
          </div>
        </div>

        {/* Seat Layout */}
        <div className="w-full">{generateSeatLayout()}</div>

        {/* Total & Continue */}
        <div className="flex justify-between items-center bg-white rounded-lg shadow-md px-4 py-3 my-5 w-full max-w-xs md:max-w-md">
          <div className="flex items-center gap-2">
            <h2 className="text-xs md:text-sm font-semibold text-gray-500">
              Total
            </h2>
            <h3 className="text-xs md:text-sm font-semibold text-[#b92d14e8]">
              Rs. {selectedSeats.reduce((acc, seat) => acc + seat.price, 0)}
            </h3>
          </div>
          <Link
            href="/"
            className="theme_btn1 linkstylenone text-xs md:text-sm"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectScreen;
