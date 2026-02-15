import { useState } from 'react';
import { Drawer } from '@kev-ui/drawer/Drawer';
import { Button } from '@kev-ui/button/Button';

export default function DrawerPage() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-4">Drawer</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Import</h2>
        <code className="bg-gray-100 px-2 py-1 rounded text-sm block">
          import {`{ Drawer }`} from '@kev-ui/drawer/Drawer'
        </code>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Examples</h2>
        <div className="flex gap-4 flex-wrap">
          <Button onClick={() => setLeftOpen(true)}>Open Left Drawer</Button>
          <Button onClick={() => setRightOpen(true)}>Open Right Drawer</Button>
        </div>
      </div>

      <Drawer open={leftOpen} onOpenChange={setLeftOpen} anchor="left">
        <div className="p-6 w-64">
          <h3 className="text-lg font-semibold mb-4">Left Drawer</h3>
          <p className="text-gray-600 mb-4">This is a left-anchored drawer.</p>
          <Button onClick={() => setLeftOpen(false)}>Close</Button>
        </div>
      </Drawer>

      <Drawer open={rightOpen} onOpenChange={setRightOpen} anchor="right">
        <div className="p-6 w-64">
          <h3 className="text-lg font-semibold mb-4">Right Drawer</h3>
          <p className="text-gray-600 mb-4">This is a right-anchored drawer.</p>
          <Button onClick={() => setRightOpen(false)}>Close</Button>
        </div>
      </Drawer>
    </div>
  );
}
