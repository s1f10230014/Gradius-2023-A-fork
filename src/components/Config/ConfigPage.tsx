import type { ConfigModel } from '$/commonTypesWithClient/models';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import styles from './Config.module.css';

export const Config = () => {
  const [info, setInfo] = useState<ConfigModel>();
  const fetchInfo = async () => {
    const res = await apiClient.config.$get();
    setInfo(res);
  };
  const update = async (newInfo: ConfigModel) => {
    if (newInfo !== undefined) {
      await apiClient.config.$post({ body: newInfo });
      console.log('更新!');
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>項目</th>
              <th>現在の設定</th>
              <th>入力欄</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>基本playerspeed</th>
              <td>{info?.playerSpeed}/0.1秒</td>
              <td>
                <input type="text" name="PlayerSpeed" placeholder="入力してください" />
              </td>
            </tr>
            <tr>
              <th>基本playerサイズ</th>
              <td>
                h:{info?.playerSize.h} w:{info?.playerSize.w}
              </td>
              <td>
                <input type="text" name="PlayerSize_h" placeholder="高さを入力してください" />
                <input type="text" name="PlayerSize_w" placeholder="幅を入力してください" />
              </td>
            </tr>
            <tr>
              <th>敵の出現頻度</th>
              <td>1/{info?.makeEnemyFrequency}秒</td>
              <td>
                <input type="text" name="Enemy" placeholder="入力してください" />
              </td>
            </tr>
            <tr>
              <th>基本敵speed</th>
              <td>{info?.enemySpeed}/0.1秒</td>
              <td>
                <input type="text" name="EnemySpeed" placeholder="入力してください" />
              </td>
            </tr>
            <tr>
              <th>基本敵サイズ</th>
              <td>
                h:{info?.enemySize.h},w:{info?.enemySize.w}
              </td>
              <td>
                <input type="text" name="EnemySize_h" placeholder="高さを入力してください" />
                <input type="text" name="EnemySize_w" placeholder="幅を入力してください" />
              </td>
            </tr>
            <tr>
              <th>画面数</th>
              <td>15</td>
              <td>
                <input type="text" name="Screen" placeholder="入力してください" />
              </td>
            </tr>
          </tbody>

          <tfoot />
        </table>
        <button onClick={() => update()}>更新</button>
      </div>
    </div>
  );
};