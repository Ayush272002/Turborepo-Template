'use client';

import React from 'react';
import {
  Button,
  Card,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ImageAvatars,
} from '@repo/ui';

export default function TestPage() {
  const [tab, setTab] = React.useState('tab1');
  const [selectedValue, setSelectedValue] = React.useState('');

  return (
    <div className="p-10 space-y-6 bg-gray-100 min-h-screen">
      {/* Test Card */}
      <Card className="p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Shadcn UI Components Test</h2>

        {/* Test Input */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Name</label>
          <Input
            placeholder="Enter your name"
            className="w-full"
            onChange={(e) => console.log('Input Value:', e.target.value)}
          />
        </div>

        {/* Test Select */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Select Option</label>
          <Select
            onValueChange={(value) => setSelectedValue(value)}
            defaultValue="" // Set this to a valid option
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>

          {selectedValue && (
            <p className="mt-2 text-sm text-gray-600">
              Selected: {selectedValue}
            </p>
          )}
        </div>

        {/* Test Tabs */}
        <div className="mb-4">
          <Tabs defaultValue="tab1" value={tab} onValueChange={setTab}>
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p className="mt-2">This is content for Tab 1.</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p className="mt-2">This is content for Tab 2.</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Test Button */}
        <div className="flex space-x-4 mt-6">
          <Button
            variant="default"
            size="default"
            className="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => alert('Primary Button Clicked')}
          >
            Primary Button
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-blue-500 text-blue-500"
            onClick={() => alert('Secondary Button Clicked')}
          >
            Secondary Button
          </Button>
        </div>
      </Card>

      {/* MUI Avatar Test */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Material UI Avatar Test</h2>
        <ImageAvatars />
      </div>
    </div>
  );
}
