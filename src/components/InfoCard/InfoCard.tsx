import { ReactTyped } from "react-typed";
import {
  Circle,
  CircleOne,
  CircleThree,
  CircleTwo,
  InfoCardBottomBox,
  InfoCardBottomText,
  InfoCardContainer,
  InfoCardContainerTwo,
  InfoCardOverlay,
  InfoCardTopBox,
} from "./infoCard.styles";

const InfoCard = () => {
  return (
    <InfoCardOverlay>
      <InfoCardContainer className="dark:border-[#000000]">
        <InfoCardTopBox className="dark:bg-[#3b3b3b] dark:border-b-[#000000] dark:border-b-[1px] dark:border-solid">
          <Circle className="dark:bg-[#606060]"></Circle>
          <Circle className="dark:bg-[#606060]"></Circle>
          <Circle className="dark:bg-[#606060]"></Circle>
        </InfoCardTopBox>
        <InfoCardBottomBox className="dark:bg-[#2b2b2b]">
          <InfoCardBottomText className="dark:text-[#ffffff]">
            <span className="text-[#444444] dark:text-[#999999]">@</span>
            <span className="text-[#c5504a]">mixin</span>
            <span className="text-[#57a249]"> header</span> {"{"}
            <br />
            <span className="text-[#57a249] pl-[15px]">header</span> {"{"}
            <br />
            <span className="pl-[30px]">font-size:</span>{" "}
            <span className="text-[#9951d4]">18</span>
            <span className="text-[#c5504a]">px</span>;
            <br />{" "}
            <span className="text-[#444444] dark:text-[#999999] pl-[30px]">
              @
            </span>
            <span className="text-[#c5504a]">include</span>
            <span className="text-[#57a249]"> flex-spaced-between</span>;
            <br />
            <span className="pl-[30px]">top:</span>{" "}
            <span className="text-[#9951d4]">0</span>;
            <br />
            <span className="pl-[30px]">padding:</span>{" "}
            <span className="text-[#9951d4]">10</span>
            <span className="text-[#c5504a]">px</span>
            <span className="text-[#9951d4]"> 20</span>
            <span className="text-[#c5504a]">px</span>
            <span className="text-[#9951d4]"> 10</span>
            <span className="text-[#c5504a]">px</span>
            <span className="text-[#9951d4]"> 10</span>
            <span className="text-[#c5504a]">px</span>;
            <br />
            <span className="pl-[30px]">height:</span>{" "}
            <span className="text-[#9951d4]"> 50</span>
            <span className="text-[#c5504a]">px</span>;
            <br />
            <span className="pl-[30px]">transition:</span>
            <span className="text-[#c5504a]"> all </span>
            <span className="text-[#9951d4]"> 0.2</span>
            <span className="text-[#c5504a]">s</span>
            <span className="text-[#04b2de]"> ease</span>;
            <br />
            <span className="pl-[30px]">overflow:</span>{" "}
            <span className="text-[#04b2de]"> hidden</span>;
            <br />
            <p className="pt-[20px]">
              <span className="text-[#57a249] pl-[30px]">
                . logo__container
              </span>{" "}
              {"{"}
              <br />
              <span className="text-[#c5504a] pl-[40px]">h2</span> {"{"}
              <br />
              <span className="pl-[50px]">font-family:</span> "
              <span className="text-[#cabf6a]">Inter</span>",
              <span className="text-[#04b2de]"> sans-serif</span>;
              <br />
              <span className="pl-[50px]">font-size:</span>{" "}
              <span className="text-[#9951d4]"> 2</span>
              <span className="text-[#c5504a]">rem</span>;
              <br />
              <span className="pl-[50px]"> span</span> {"{"}
              <br />
              <span className="pl-[65px]">color:</span>
              <span className="text-[#ed8804]"> $accent-color</span>;
              <br />
            </p>
            <span className="pl-[50px]"> {"}"}</span>
            <br />
            <span className="pl-[40px]"> {"}"}</span>
            <br />
            <span className="pl-[30px]">{"}"}</span>
            <br />
            <span className="pl-[15px]"> {"}"}</span>
          </InfoCardBottomText>
        </InfoCardBottomBox>
      </InfoCardContainer>
      <InfoCardContainerTwo className="dark:border-[transparent]">
        <InfoCardTopBox className="dark:bg-[#3b3b3b] dark:border-b-[#000000] dark:border-b-[1px] dark:border-solid">
          <CircleOne></CircleOne>
          <CircleTwo></CircleTwo>
          <CircleThree></CircleThree>
        </InfoCardTopBox>
        <InfoCardBottomBox className="dark:bg-[#2b2b2b]">
          <InfoCardBottomText className="dark:text-[var(--main-dark-theme-color)]">
            <ReactTyped
              strings={[
                '<span class="text-[#c5504a]">import</span> Developer <span class="text-[#c5504a]">from</span> "<span class="text-[#cabf6a]">./Developer</span>"; <br/>' +
                  '<span class="text-[#04b2de]">class AlbinaAnistratenko <span class="text-[#c5504a]">extends</span> Developer </span>{' +
                  "<br/>" +
                  '<span class="text-[#04b2de] pl-[10px]">constructor</span>( ) {' +
                  "<br/>" +
                  '<span class="text-[#999999] pl-[25px]">super</span><span class="text-[#cabf6a]">( )</span>;' +
                  "<br/>" +
                  '<span class="text-[#999999] pl-[25px]">this.</span>age <span class="text-[#c5504a]">=</span> <span class="text-[#c5504a]"> new</span> <span class="text-[#57a249]"> Date</span> ( ).<span class="text-[#57a249]"> getFullYear</span>( ) <span class="text-[#c5504a]"> -</span> <span class="text-[#9951d4]">1995</span>;' +
                  "<br/>" +
                  '<span class="text-[#999999] pl-[25px]">this.</span>favSkills <span class="text-[#c5504a]">=</span> {' +
                  "<br/>" +
                  '<span class="pl-[35px]">teamOriented:</span> <span class="text-[#9951d4]">10</span>,' +
                  "<br/>" +
                  '<span class="pl-[35px]">determination:</span> <span class="text-[#9951d4]">10</span>,' +
                  "<br/>" +
                  '<span class="pl-[35px]">persistence:</span> <span class="text-[#9951d4]">10</span>,' +
                  "<br/>" +
                  '<span class="pl-[25px]">};</span>' +
                  "<br/>" +
                  '<span class="text-[#999999] pl-[25px]">this.</span>hasPassion <span class="text-[#c5504a]">=</span> <span class="text-[#9951d4]">true</span>;' +
                  "<br/>" +
                  '<span class="pl-[25px]">#givesUp</span> <span class="text-[#c5504a]"> = </span> <span class="text-[#9951d4]">null</span>;' +
                  "<br/>" +
                  '<span class="pl-[25px]">lovesTraveling</span> <span class="text-[#c5504a]"> = </span> <span class="text-[#9951d4]">true</span>;' +
                  "<br/>" +
                  '<span class="text-[#57a249] pl-[25px]">code</span><span class="text-[#ed8804]">(hrs)</span> { . . .' +
                  "<br/>" +
                  '<span class="pl-[25px]">}</span>' +
                  "<br/>" +
                  '<span class="text-[#57a249] pl-[25px]">drinkCoffee</span><span class="text-[#ed8804]">(cups)</span> { . . .' +
                  "<br/>" +
                  '<span class="pl-[25px]">}</span>' +
                  "<br/>" +
                  "};" +
                  "<br/>" +
                  '<span class="text-[#c5504a]">export default new</span><span class="text-[#57a249]"> AlbinaAnistratenko</span><span class="text-[#c5504a]">()</span>;',
              ]}
              typeSpeed={100}
            />
          </InfoCardBottomText>
        </InfoCardBottomBox>
      </InfoCardContainerTwo>
    </InfoCardOverlay>
  );
};

export default InfoCard;
