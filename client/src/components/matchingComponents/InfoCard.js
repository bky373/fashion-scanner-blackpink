import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'components/matchingComponents/css/InfoCard.css';

const InfoCard = ({ memberObj, imgObj, isShared, isClicked }) => {
  const { t } = useTranslation('infoCard');

  useEffect(() => {
    createKakaoButton();
  }, []);

  // 카카오톡 공유하기
  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      let sharingUrl = '';
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_INIT_KEY);
      }
      if (memberObj.name === 'jisoo') {
        sharingUrl = `https://www.facebook.com/sharer/sharer.php?u=http://elice-kdt-ai-track-vm-distribute-13.koreacentral.cloudapp.azure.com/`;
      } else if (memberObj.name === 'jennie') {
        sharingUrl = `https://www.facebook.com/sharer/sharer.php?u=http://elice-kdt-ai-track-vm-distribute-13.koreacentral.cloudapp.azure.com/`;
      } else if (memberObj.name === 'lisa') {
        sharingUrl = `https://www.facebook.com/sharer/sharer.php?u=http://elice-kdt-ai-track-vm-distribute-13.koreacentral.cloudapp.azure.com/`;
      } else {
        sharingUrl = `https://www.facebook.com/sharer/sharer.php?u=http://elice-kdt-ai-track-vm-distribute-13.koreacentral.cloudapp.azure.com/`;
      }

      window.Kakao.Link.createDefaultButton({
        container: '#create-kakao-link-btn',
        objectType: 'feed',
        content: {
          title: 'FASHION SCANNER',
          description: '#AI #FASHION #SCANNING #BLACKPINK #MATCHING',
          imageUrl: sharingUrl,
          link: {
            mobileWebUrl: sharingUrl,
            webUrl: sharingUrl,
          },
        },
        buttons: [
          {
            title: '매칭 결과 보기',
            link: {
              mobileWebUrl: sharingUrl,
              webUrl: sharingUrl,
            },
          },
        ],
      });
    }
  };

  // 페이스북 공유하기 핸들러
  const onSharingFacebook = () => {
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=http://elice-kdt-ai-track-vm-distribute-13.koreacentral.cloudapp.azure.com/',
    );
  };

  // 트위터 공유하기 핸들러
  const onSharingTwitter = () => {
    window.open(
      'https://www.twitter.com/intent/tweet?&url=http://elice-kdt-ai-track-vm-distribute-13.koreacentral.cloudapp.azure.com/',
    );
  };

  return (
    <>
      <div className={`infoCard ${isClicked ? 'clicked' : ''} ${isShared ? 'shared' : ''}`}>
        <div className="infoCard__dsc">
          <p>
            {memberObj.title}
            <br />
            {memberObj.comment1}
            <br />
            {memberObj.comment2}
          </p>
        </div>
        {isShared ? (
          <></>
        ) : (
          <>
            <div className="infoCard__imgObj">
              <table>
                <th colspan="2">{t('infoCard_imgObj')}</th>
                <tr>
                  <td>Type</td>
                  <td>{imgObj.type}</td>
                </tr>
                <tr>
                  <td>Feature</td>
                  <td>{imgObj.feature}</td>
                </tr>
              </table>
            </div>
          </>
        )}
        <div className="infoCard__btn">
          <a href={`/lookbook/${memberObj.name}`}>{memberObj.btnLabel}</a>
        </div>
        <div className="sharing__box">
          <p className="sharing__title">{t('sharing_title')}</p>
          <div className="sharing__btns">
            <div className="sharing__kakaotalk">
              <a className="sharing__a" id="create-kakao-link-btn" href="javascript:;">
                <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
              </a>
            </div>
            <div className="sharing__facebook">
              <button className="sharing__btn" onClick={onSharingFacebook}>
                <img src="/images/matching/facebook_logo.png" alt="facebook" />
              </button>
            </div>
            <div className="sharing__twitter">
              <button className="sharing__btn" onClick={onSharingTwitter}>
                <img src="/images/matching/twitter_logo.png" alt="twitter" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
