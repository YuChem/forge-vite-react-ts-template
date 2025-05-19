import { CustomFetchClient } from '@eureka/auth-intercept-lib';
import React, { useEffect, useState } from 'react';

interface Asset {
  asset_name: string;
  asset_type: string;
  has_children: boolean;
  id: number;
  is_visible: boolean;
  name: string;
  parent_id: number;
  title: string;
}

const AssetList: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await CustomFetchClient.get<{ data: Asset[] }>(``);
        setAssets(response.data);
      } catch (error) {
        console.error('Error fetching assets:', error);
      }
    };

    fetchAssets();
  }, []);

  return (
    <div>
      <h1>Asset List</h1>
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>
            <h2>{asset.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetList;