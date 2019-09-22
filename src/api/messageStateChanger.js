export default msg => {
    switch(msg.type) {
      case 'REVEAL': return {};
      case 'SOB': return {};
      case 'BA': return {};
      case 'OH': return {};
      case 'OD': return {};
      case 'AA': return {};
      case 'EOB': return {};
      case 'RECYCLE': return {};
      case 'P1_D1_DISCARD_CHANGED': return {playerOneDiscardOne: msg.args};
      case 'P1_D2_DISCARD_CHANGED': return {playerOneDiscardTwo: msg.args};
      case 'P2_D1_DISCARD_CHANGED': return {playerTwoDiscardOne: msg.args};
      case 'P2_D2_DISCARD_CHANGED': return {playerTwoDiscardTwo: msg.args};
      case 'PAIRS_SELECTED': return {};
      case 'P1_PAIR_REVEALED': return {playerOnePair: msg.args};
      case 'P2_PAIR_REVEALED': return {playerTwoPair: msg.args};
      case 'BOARD_CHANGED': return {board: msg.args[0].spaces}
      case 'P1_DAMAGE': return {playerOneHealth: msg.args[1]};
      case 'P2_DAMAGE': return {playerTwoHealth: msg.args[1]};
      case 'CHARACTER_SELECT': return {};
      case 'P1_CHAR_SELECTED': return {playerOneInfo: msg.args};
      case 'P2_CHAR_SELECTED': return {playerTwoInfo: msg.args};
      case 'DISCARD_SELECT': return {};
      case 'PAIR_SELECT': return {};
      case 'ANTE_SELECT': return {};
      case 'P1_ANTE': return {};
      case 'P2_ANTE': return {};
      case 'EFFECT_CHOICE': return {};
      case 'PRIORITY_ACTIVE': return {};
    }
};
