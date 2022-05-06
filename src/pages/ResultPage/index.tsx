import React from 'react';
import { useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';
import { Howl } from 'howler';

import { getWordDefinitionLoadingSelector, getWordDefinitionSelector } from '../../store/selectors/wordDefenition.selectors';
import soundImg from '../../assets/sound.svg';

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
        <div className={styles.words}>
          {wordDefinition.map((word) => (
            <>
              <div className={styles.wordWrap}>
                <div className={styles.word}>{word.word}</div>
                <div className={styles.phonetic}>{word.phonetic}</div>
                <div className={styles.phonetics}>
                  {word.phonetics.map((item) => (
                    <div className={styles.phoneticsItem}>
                      {item.text && <div>{item.text}</div>}
                      {item.audio && (
                        <button onClick={() => soundPlay(item.audio)}>
                          <img src={soundImg} />
                        </button>
                      )}
                      {item.sourceUrl && (
                        <a className={styles.sourceLink} href={item.sourceUrl} target="_blank">
                          source link
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.meanings}>
                  {word.meanings &&
                    word.meanings.map((meaning) => (
                      <>
                        <div className={styles.partOfSpeech}>{meaning.partOfSpeech}</div>
                        {meaning.definitions.map((def) => (
                          <div>
                            <li className={styles.defenition}>{def.definition}</li>
                            <div className={styles.example}>{def.example}</div>
                          </div>
                        ))}
                        {!!meaning.synonyms.length && (
                          <div className={styles.synonyms}>
                            Synonims:
                            {meaning.synonyms.map((synonym) => (
                              <li>{synonym}</li>
                            ))}
                          </div>
                        )}
                        {!!meaning.antonyms.length && (
                          <div className={styles.antonyms}>
                            Antonyms:
                            {meaning.antonyms.map((antonym) => (
                              <li>{antonym}</li>
                            ))}
                          </div>
                        )}
                      </>
                    ))}
                </div>
                {word.sourceUrl &&
                  word.sourceUrl.map((source) => (
                    <a href={source} className={styles.source}>
                      {source}
                    </a>
                  ))}
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default ResultPage;
