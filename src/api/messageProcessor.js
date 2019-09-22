export default msg => {
    switch(msg.type) {
      case 'REVEAL': return 'Reveal stage';
      case 'SOB': return 'SOB stage';
      case 'BA': return 'BA stage';
      case 'OH': return 'OH stage';
      case 'OD': return 'OD stage';
      case 'AA': return 'AA stage';
      case 'EOB': return 'EOB stage';
      case 'RECYCLE': return 'Recycle stage';
      case 'P1_D1_DISCARD_CHANGED': return null;
      case 'P1_D2_DISCARD_CHANGED': return null;
      case 'P2_D1_DISCARD_CHANGED': return null;
      case 'P2_D2_DISCARD_CHANGED': return null;
      case 'PAIRS_SELECTED': return 'Pairs have been selected. Ante phase.';
      case 'P1_PAIR_REVEALED': return null;
      case 'P2_PAIR_REVEALED': return null;
      case 'BOARD_CHANGED': return 'Board state has been changed';
      case 'P1_DAMAGE': return 'Player one hits for ' + msg.args[0] + ' damage.';
      case 'P2_DAMAGE': return 'Player two hits for ' + msg.args[0] + ' damage.';
      case 'CHARACTER_SELECT': return 'Select characters. Type in the character name.';
      case 'P1_CHAR_SELECTED': return null;
      case 'P2_CHAR_SELECTED': return null;
      case 'DISCARD_SELECT': return 'Select your discards. Type in the four cards in d1 d1 d2 d2 order.';
      case 'PAIR_SELECT': return 'Select your pair';
      case 'ANTE_SELECT': return 'Select ante from available options. Type in the index. Options ' + msg.args;
      case 'P1_ANTE': return 'Player one anted ' + msg.args[0];
      case 'P2_ANTE': return 'Player two anted ' + msg.args[0];
      case 'EFFECT_CHOICE': return 'Effect choice. Type in the index. Effect ' + msg.args[0] + ' choices ' + msg.args[1];
      case 'PRIORITY_ACTIVE': return 'Player ' + msg.args[0] + ' has become the active player';
    }
};
