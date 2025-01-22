// BACKGROUND COLOR
interface IBgDefault {
  bgDefaultDarkBlue: string;
  bgDefaultGreenBlue: string;
  bgDefaultBlue: string;
  bgDefaultSuccess: string;
  bgDefaultError: string;
  bgDefaultAlert: string;
  bgDefaultInfo: string;
}

export const bgDefault: IBgDefault = {
  bgDefaultDarkBlue: '#394475',
  bgDefaultGreenBlue: '#00657f75',
  bgDefaultBlue: '#005db57a',
  bgDefaultSuccess: '#008B10',
  bgDefaultError: '#C21D1D',
  bgDefaultAlert: '#C3AD00',
  bgDefaultInfo: '#0098CF',
};

// TEXT COLOR
interface ITxDefault {
  txDefaultBlack: string;
  txDefaultWhite: string;
  txDefaultSuccess: string;
  txDefaultError: string;
  txDefaultAlert: string;
  txDefaultInfo: string;
}

export const txDefault: ITxDefault = {
  txDefaultBlack: '#000000',
  txDefaultWhite: '#F9F9F9',
  txDefaultSuccess: '#008B10',
  txDefaultError: '#C21D1D',
  txDefaultAlert: '#C3AD00',
  txDefaultInfo: '#0098CF',
};
