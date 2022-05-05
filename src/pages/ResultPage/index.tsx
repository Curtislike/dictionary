import React from 'react';
import { useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';
import { Howl } from 'howler';

import { getWordDefinitionLoadingSelector, getWordDefinitionSelector } from '../../store/selectors/wordDefenition.selectors';

import styles from './styles.module.scss';

const ResultPage = () => {
  const wordDefinition = useSelector(getWordDefinitionSelector);
  const isLoading = useSelector(getWordDefinitionLoadingSelector);

  const soundPlay = (src: string) => {
    const sound = new Howl({
      src,
      volume: 0.5,
    });
    sound.play();
  };

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>
          <TailSpin color="#6667ab" height={100} width={100} />
        </div>
      ) : (
        <div className={styles.wordsWrap}>
          {wordDefinition.map((word) => (
            <div className={styles.word}>
              {word.word}
              <div>{word.phonetics.map((item) => (item.audio ? <button onClick={() => soundPlay(item.audio)}>{word.word}</button> : <></>))}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ResultPage;
